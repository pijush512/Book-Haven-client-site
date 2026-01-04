import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContex';
import Swal from 'sweetalert2'; // SweetAlert2 ইম্পোর্ট

const AddBooks = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    summary: "",
    coverImage: "",
    userEmail: user?.email,
    userName: user?.displayName
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://book-haven-server-site.vercel.app/books', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          // SweetAlert সফল মেসেজ
          Swal.fire({
            title: 'Success!',
            text: 'Book added successfully to your collection!',
            icon: 'success',
            confirmButtonColor: '#4F46E5',
            confirmButtonText: 'Great!'
          });

          // ফর্ম রিসেট
          setFormData({
            title: "",
            author: "",
            genre: "",
            rating: "",
            summary: "",
            coverImage: "",
            userEmail: user?.email,
            userName: user?.displayName
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10 px-4">
      <div className="card w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white text-center">
          <h1 className="text-3xl font-bold uppercase tracking-wider">Add New Book</h1>
          <p className="text-indigo-100 text-sm mt-1">Share your favorite book with the world</p>
        </div>

        <form onSubmit={handleSubmit} className="card-body p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Title */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold text-gray-700">Book Title</label>
            <input className="input input-bordered focus:border-indigo-500 bg-gray-50 shadow-sm" type="text" name="title" placeholder="e.g. The Great Gatsby" value={formData.title} onChange={handleChange} required />
          </div>

          {/* Author */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Author Name</label>
            <input className="input input-bordered focus:border-indigo-500 bg-gray-50 shadow-sm" type="text" name="author" placeholder="F. Scott Fitzgerald" value={formData.author} onChange={handleChange} required />
          </div>

          {/* Genre */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Genre</label>
            <input className="input input-bordered focus:border-indigo-500 bg-gray-50 shadow-sm" type="text" name="genre" placeholder="Classic Fiction" value={formData.genre} onChange={handleChange} required />
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Rating (0-5)</label>
            <input className="input input-bordered focus:border-indigo-500 bg-gray-50 shadow-sm" type="number" name="rating" placeholder="4.5" value={formData.rating} onChange={handleChange} required min="0" max="5" step="0.1" />
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Cover Image URL</label>
            <input className="input input-bordered focus:border-indigo-500 bg-gray-50 shadow-sm" type="text" name="coverImage" placeholder="https://image-link.com" value={formData.coverImage} onChange={handleChange} />
          </div>

          {/* Summary */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold text-gray-700">Book Summary</label>
            <textarea className="textarea textarea-bordered h-32 focus:border-indigo-500 bg-gray-50 shadow-sm" name="summary" placeholder="Write a brief description about the book..." value={formData.summary} onChange={handleChange} required />
          </div>

          {/* Submit Button */}
          <div className="form-control md:col-span-2 mt-4">
            <button type="submit" className="btn btn-indigo bg-indigo-600 hover:bg-indigo-700 border-none text-white text-lg font-bold shadow-lg transition-all duration-300">
              Publish Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
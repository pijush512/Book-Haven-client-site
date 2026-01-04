import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContex'; // আপনার কনটেক্সট পাথ চেক করে নিন

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAdmin } = useContext(AuthContext); // isAdmin রোল নিয়ে আসা হলো
  const [loading, setLoading] = useState(true); // লোডার স্টেট

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    summary: "",
    coverImage: "",
  });

  // ডাটাবেস থেকে বর্তমান বইয়ের তথ্য নিয়ে আসা
  useEffect(() => {
    setLoading(true);
    fetch(`https://book-haven-server-site.vercel.app/books/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setFormData({
            title: data.title || "",
            author: data.author || "",
            genre: data.genre || "",
            rating: data.rating || "",
            summary: data.summary || "",
            coverImage: data.coverImage || ""
          });
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://book-haven-server-site.vercel.app/books/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          Swal.fire({
            title: "Updated!",
            text: "Book details have been updated successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });

          // রোল অনুযায়ী নেভিগেশন (এটিই আপনার বাগ ফিক্স করবে)
          if (isAdmin) {
            navigate("/dashboard/manageBooks");
          } else {
            navigate("/dashboard/myBooks");
          }
        } else {
          toast.error("Update failed!");
        }
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  // লোডিং অবস্থায় একটি সুন্দর স্পিনার (Requirement 1 - Loaders)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-lg text-indigo-600"></span>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-10 bg-white shadow-2xl rounded-3xl mt-5 md:mt-10">
      <Toaster />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-800 uppercase tracking-wide">Update Book Details</h1>
        <div className="h-1 w-20 bg-indigo-600 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-500 mt-3">Modify the information of <span className="text-indigo-600 font-bold">"{formData.title}"</span></p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Title */}
        <div className="form-control md:col-span-2">
          <label className="label font-bold text-gray-700">Book Title</label>
          <input
            className='input input-bordered focus:ring-2 focus:ring-indigo-500 bg-gray-50'
            type="text" name="title" value={formData.title} onChange={handleChange} placeholder="The Alchemist" required
          />
        </div>

        {/* Author */}
        <div className="form-control">
          <label className="label font-bold text-gray-700">Author</label>
          <input
            className='input input-bordered focus:ring-2 focus:ring-indigo-500 bg-gray-50'
            type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Paulo Coelho" required
          />
        </div>

        {/* Genre */}
        <div className="form-control">
          <label className="label font-bold text-gray-700">Genre</label>
          <input
            className='input input-bordered focus:ring-2 focus:ring-indigo-500 bg-gray-50'
            type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Fiction / Adventure" required
          />
        </div>

        {/* Rating */}
        <div className="form-control">
          <label className="label font-bold text-gray-700">Rating (0 - 5)</label>
          <input
            className='input input-bordered focus:ring-2 focus:ring-indigo-500 bg-gray-50'
            type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="4.8" min="0" max="5" step="0.1" required
          />
        </div>

        {/* Cover Image URL */}
        <div className="form-control">
          <label className="label font-bold text-gray-700">Cover Image URL</label>
          <input
            className='input input-bordered focus:ring-2 focus:ring-indigo-500 bg-gray-50'
            type="text" name="coverImage" value={formData.coverImage} onChange={handleChange} placeholder="https://image-url.com"
          />
        </div>

        {/* Summary */}
        <div className="form-control md:col-span-2">
          <label className="label font-bold text-gray-700">Brief Summary</label>
          <textarea
            className='textarea textarea-bordered h-32 focus:ring-2 focus:ring-indigo-500 bg-gray-50'
            name="summary" value={formData.summary} onChange={handleChange} placeholder="Describe the book..." required
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 mt-6">
          <button type="submit" className="btn btn-primary w-full text-white bg-indigo-600 hover:bg-indigo-700 border-none shadow-lg text-lg uppercase">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
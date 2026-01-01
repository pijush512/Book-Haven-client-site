import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContex';
import toast, { Toaster } from 'react-hot-toast';


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
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/books', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Book added successfully!");
        console.log(data)
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
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
  }


  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Add a Book</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="border rounded-md py-2 px-2" type=" text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input className="border rounded-md py-2 px-2" type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
        <input className="border rounded-md py-2 px-2" type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} required />
        <input className="border rounded-md py-2 px-2" type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} required min="0" max="5" step="0.1" />
        <textarea className="border rounded-md py-2 px-2" name="summary" placeholder="Summary" value={formData.summary} onChange={handleChange} required />
        <input className="border rounded-md py-2 px-2" type="text" name="coverImage" placeholder="Cover Image URL" value={formData.coverImage} onChange={handleChange} />
        <button type="submit" className="btn btn-primary mt-2">Add Book</button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddBooks;
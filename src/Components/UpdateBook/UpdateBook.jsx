import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    summary: "",
    coverImage: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then(res => res.json())
      .then(data => setFormData({
        title: data.title,
        author: data.author,
        genre: data.genre,
        rating: data.rating,
        summary: data.summary,
        coverImage: data.coverImage
      }))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/books/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast.success("Book updated successfully!");
          navigate("/myBooks");
        }
        else {
          toast.error("Update failed!");
        }

      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
  };


  return (
    <div className="max-w-xl mx-auto p-6">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Update Book</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className='border rounded-md py-2 px-2'
          type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <input className='border rounded-md py-2 px-2'
          type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author" required />
        <input className='border rounded-md py-2 px-2'
          type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" required />
        <input className='border rounded-md py-2 px-2'
          type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" min="0" max="5" step="0.1" required />
        <textarea className='border rounded-md py-2 px-2'
          name="summary" value={formData.summary} onChange={handleChange} placeholder="Summary" required />
        <input className='border rounded-md py-2 px-2'
          type="text" name="coverImage" value={formData.coverImage} onChange={handleChange} placeholder="Cover Image URL" />
        <button type="submit" className="btn btn-primary mt-2">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
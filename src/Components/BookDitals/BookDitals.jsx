import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Spinner from '../Spinner/Spinner';
import { FaArrowLeft, FaStar, FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const BookDitals = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://book-haven-server-site.vercel.app/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(error => console.log(error));
  }, [id]);

  if (!book) return <Spinner />;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:gap-3 transition-all"
        >
          <FaArrowLeft /> Back to Collection
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">

            {/* Left: Book Cover Image */}
            <div className="md:w-2/5 relative h-[450px] md:h-auto overflow-hidden bg-indigo-50">
              <img
                src={book.coverImage || 'https://via.placeholder.com/400x600'}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 font-black text-indigo-600 uppercase tracking-widest text-xs">
                  {book.genre}
                </span>
              </div>
            </div>

            {/* Right: Book Information */}
            <div className="md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full">
                  <FaStar />
                  <span className="font-bold text-gray-800">{book.rating} / 5.0</span>
                </div>
                <div className="flex gap-4 text-gray-400">
                  <FaRegBookmark className="cursor-pointer hover:text-indigo-600" />
                  <FaShareAlt className="cursor-pointer hover:text-indigo-600" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                {book.title}
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-indigo-100 ring-offset-2">
                    <img src={`https://ui-avatars.com/api/?name=${book.author}&background=6366f1&color=fff`} alt="author" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">Written by</p>
                  <p className="text-lg font-bold text-gray-800">{book.author}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest mb-3">Summary</h3>
                  <p className="text-gray-600 leading-relaxed text-lg italic">
                    "{book.summary}"
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-100 flex gap-4">
                  <button className="btn btn-primary btn-lg rounded-2xl px-10 bg-indigo-600 border-none shadow-xl hover:bg-indigo-700">
                    Read Book
                  </button>
                  <button className="btn btn-outline btn-lg rounded-2xl px-10 border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300">
                    Buy Hardcopy
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Optional: Extra Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-400 text-xs font-bold uppercase mb-1">Added By</p>
            <p className="text-gray-700 font-bold">{book.userEmail}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase mb-1">Status</p>
            <span className="badge badge-success gap-2 py-3 px-4 text-white font-bold">Available</span>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-right">
            <p className="text-gray-400 text-xs font-bold uppercase mb-1">Category</p>
            <p className="text-gray-700 font-bold capitalize">{book.genre} Literature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDitals;
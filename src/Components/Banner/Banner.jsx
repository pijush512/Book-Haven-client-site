import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <div className="relative w-11/12 mx-auto h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 animate-gradient-x"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold animate-pulse">Welcome to The Book Haven</h1>
        <p className="mt-4 text-lg max-w-xl">
          Explore your favorite books, discover new genres, and share your own stories.
        </p>
        <div className="mt-6 flex gap-4">
          <Link to="/allBooks"
            className="px-6 py-2 bg-white text-blue-500 font-bold rounded hover:bg-blue-100 transition"
          >
            All Books
          </Link>
          <Link to="/addBooks"
            className="px-6 py-2 bg-white text-purple-500 font-bold rounded hover:bg-purple-100 transition"
          >
            Create Book
          </Link>
        </div>
      </div>
    </div >
  );
};

export default Banner;




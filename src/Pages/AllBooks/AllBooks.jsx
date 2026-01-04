import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  useEffect(() => {
    setLoading(true);
    fetch('https://book-haven-server-site.vercel.app/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-800 uppercase tracking-tight">Our Library Collection</h1>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentBooks.map((book) => (
            <div key={book._id} className="card bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-100 rounded-3xl overflow-hidden group">

              <figure className="h-72 overflow-hidden relative">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
                  <FaStar /> {book.rating}
                </div>
              </figure>
              <div className="p-6">
                <div className="badge badge-outline text-indigo-600 font-bold mb-2">{book.genre}</div>
                <h2 className="text-2xl font-bold text-gray-800 line-clamp-1">{book.title}</h2>
                <p className="text-gray-500 mb-4 font-medium">by {book.author}</p>

                <p className="text-sm text-gray-600 line-clamp-2 mb-6 italic">
                  "{book.summary}"
                </p>

                <div className="card-actions justify-end">
                  <Link
                    to={`/bookDitals/${book._id}`}
                    className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none w-full rounded-xl"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className="btn btn-square btn-outline border-gray-300"
            >
              <FaArrowLeft />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`btn btn-square font-bold ${currentPage === index + 1
                    ? "bg-indigo-600 text-white border-none"
                    : "bg-white text-gray-600 border-gray-200"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
              className="btn btn-square btn-outline border-gray-300"
            >
              <FaArrowRight />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllBooks;
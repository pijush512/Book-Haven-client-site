import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <div className="p-6 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">All Books</h1>

      <table className="table-auto border w-full">
        <thead className="bg-gray-300">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Book Name</th>
            <th className="border border-gray-400 px-4 py-2">Author</th>
            <th className="border border-gray-400 px-4 py-2">Genre</th>
            <th className="border border-gray-400 px-4 py-2">Rating</th>
            <th className="border border-gray-400 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="border border-gray-300 px-4 py-2">{book.title}</td>
              <td className="border border-gray-300 px-4 py-2">{book.author}</td>
              <td className="border border-gray-300 px-4 py-2">{book.genre}</td>
              <td className="border border-gray-300 px-4 py-2">{book.rating}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/bookDitals/${book._id.toString()}`} className="text-blue-600 underline">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooks;
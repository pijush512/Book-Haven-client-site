import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

const LatestBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/books/latest')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch latest books:', error);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <Spinner></Spinner>
  }

  return (

    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {books.map(book => (
        <div key={book._id} className=" hover:scale-105 duration-500 ease-in-out hover:-translate-y-4 transition-transform mt-8  shadow-md p-2 rounded-md">
          <img src={book.coverImage} alt={book.title} className="w-full h-50 object-cover mt-2 rounded-md" />
          <h3 className="font-bold mt-2">{book.title}</h3>
          <p className="text-sm text-gray-500 mt-2">{book.author}</p>
        </div>
      ))}
    </div>


  );
};

export default LatestBooks;
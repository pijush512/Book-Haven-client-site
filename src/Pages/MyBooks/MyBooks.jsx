import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContex';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // SweetAlert2 ইম্পোর্ট
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // আইকন ব্যবহার করলে সুন্দর দেখায়

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`https://book-haven-server-site.vercel.app/myBooks/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [user]);

  // Delete Book with SweetAlert2
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://book-haven-server-site.vercel.app/books/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              setBooks(books.filter(book => book._id !== id));
              Swal.fire(
                'Deleted!',
                'Your book has been deleted.',
                'success'
              );
            }
          })
          .catch(error => {
            Swal.fire('Error!', 'Failed to delete the book.', 'error');
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">My Book Collection</h2>
            <p className="text-indigo-100 text-sm">You have added {books.length} books</p>
          </div>
          <button
            onClick={() => navigate('/dashboard/addBooks')}
            className="btn btn-sm md:btn-md bg-white text-indigo-600 hover:bg-indigo-50 border-none font-bold"
          >
            + Add New
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex justify-center my-20">
              <span className="loading loading-spinner loading-lg text-indigo-600"></span>
            </div>
          ) : books.length > 0 ? (
            <table className="table w-full">
              {/* head */}
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="py-4">Book Details</th>
                  <th className="hidden md:table-cell">Genre</th>
                  <th>Rating</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book._id} className="hover:bg-gray-50 transition-colors border-b">
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 bg-gray-200">
                            <img src={book.coverImage || "https://via.placeholder.com/150"} alt={book.title} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{book.title}</div>
                          <div className="text-sm opacity-60 font-semibold">{book.author}</div>
                        </div>
                      </div>
                    </td>
                    <td className="hidden md:table-cell">
                      <span className="badge badge-ghost badge-md">{book.genre}</span>
                    </td>
                    <td>
                      <div className="flex items-center text-orange-500 font-bold">
                        ⭐ {book.rating}
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="flex justify-center gap-2">
                        {/* Update Button */}
                        <button
                          onClick={() => navigate(`/dashboard/updateBook/${book._id}`)}
                          className="btn btn-square btn-outline btn-sm text-blue-600 hover:bg-blue-600"
                        >
                          <FaEdit />
                        </button>
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(book._id)}
                          className="btn btn-square btn-outline btn-sm text-red-600 hover:bg-red-600"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-500">No books found in your collection.</h3>
              <button onClick={() => navigate('/dashboard/addBooks')} className="btn btn-link text-indigo-600">Start adding now!</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        setLoading(true);
        fetch('https://book-haven-server-site.vercel.app/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            });
    };

    const handleDeleteBook = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This book will be removed permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6366f1",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://book-haven-server-site.vercel.app/books/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            const remaining = books.filter(book => book._id !== id);
                            setBooks(remaining);
                            Swal.fire("Deleted!", "Book has been removed.", "success");
                        }
                    })
                    .catch(() => toast.error("Error deleting book"));
            }
        });
    };

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-indigo-600"></span>
        </div>
    );

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Manage Inventory</h2>
                    <p className="text-gray-500 text-sm">Update or remove books from the system</p>
                </div>
                <div className="stats shadow bg-indigo-600 text-white">
                    <div className="stat px-6 py-2">
                        <div className="stat-title text-indigo-100 text-xs font-bold uppercase">Total Books</div>
                        <div className="stat-value text-2xl">{books.length}</div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-100">
                <table className="table w-full">
                    <thead className="bg-gray-50 text-gray-700">
                        <tr>
                            <th className="py-4">#</th>
                            <th>Cover</th>
                            <th>Title & Author</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className="hover:bg-indigo-50/30 transition-all border-b border-gray-100">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-14 h-14 bg-gray-100 border border-gray-200">
                                            {/* এখানে coverImage ব্যবহার করা হয়েছে */}
                                            <img
                                                src={book.coverImage}
                                                alt={book.title}
                                                onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=No+Cover" }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold text-gray-800">{book.title}</div>
                                    <div className="text-xs text-gray-500 font-medium italic">By {book.author}</div>
                                </td>
                                <td>
                                    {/* এখানে genre ব্যবহার করা হয়েছে */}
                                    <span className="badge badge-outline badge-info font-semibold">{book.genre}</span>
                                </td>
                                <td>
                                    <div className="flex items-center gap-1 text-orange-500 font-bold">
                                        ⭐ {book.rating}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex justify-center gap-3">
                                        <Link to={`/dashboard/updateBook/${book._id}`}>
                                            <button className="btn btn-sm btn-circle bg-blue-50 text-blue-600 border-none hover:bg-blue-600 hover:text-white transition-all">
                                                <FaEdit size={16} />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDeleteBook(book._id)}
                                            className="btn btn-sm btn-circle bg-red-50 text-red-600 border-none hover:bg-red-600 hover:text-white transition-all"
                                        >
                                            <FaTrashAlt size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBooks;
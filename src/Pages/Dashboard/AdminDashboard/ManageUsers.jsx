import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        setLoading(true);
        fetch('https://book-haven-server-site.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }

    // ২. ইউজারকে অ্যাডমিন বানানোর ফাংশন (SweetAlert সহ)
    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to make ${user.name} an admin?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4f46e5", // Indigo color
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://book-haven-server-site.vercel.app/users/admin/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            fetchUsers();
                            Swal.fire({
                                title: "Promoted!",
                                text: `${user.name} is now an Admin.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    // ৩. ইউজার ডিলিট করার ফাংশন (SweetAlert সহ)
    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://book-haven-server-site.vercel.app/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            fetchUsers();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-indigo-600"></span>
        </div>
    );

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800">Manage Users</h2>
                    <p className="text-gray-500">Control user roles and accounts</p>
                </div>
                <div className="stats shadow bg-indigo-50 text-indigo-700 border border-indigo-100">
                    <div className="stat py-2 px-6">
                        <div className="stat-title text-indigo-500 font-medium">Total Users</div>
                        <div className="stat-value text-2xl">{users.length}</div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto shadow-2xl rounded-2xl border border-gray-100">
                <table className="table w-full">
                    <thead className="bg-indigo-600 text-white">
                        <tr>
                            <th className="p-4">#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-indigo-50/30 transition-all border-b border-gray-100">
                                <th className="text-gray-400">{index + 1}</th>
                                <td>
                                    <div className="font-bold text-gray-700">{user.name || "N/A"}</div>
                                </td>
                                <td className="text-gray-600">{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? (
                                        <div className="badge badge-secondary badge-outline font-bold px-4 py-3">ADMIN</div>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-sm bg-orange-100 text-orange-600 border-none hover:bg-orange-500 hover:text-white transition-all gap-2"
                                        >
                                            <FaUsers /> Make Admin
                                        </button>
                                    )}
                                </td>
                                <td className="text-center">
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-md text-red-500 hover:bg-red-100 rounded-full"
                                        title="Delete User"
                                    >
                                        <FaTrashAlt size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdOutlineLibraryBooks, MdOutlinePostAdd, MdManageAccounts } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { AuthContext } from '../../context/AuthContex';

const Sidebar = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            // আপনার সার্ভারের নতুন এপিআই ব্যবহার করা ভালো
            fetch(`https://book-haven-server-site.vercel.app/users`)
                .then(res => res.json())
                .then(data => {
                    const loggedInUser = data.find(u => u.email === user.email);
                    // ডাটাবেসে role না থাকলে ডিফল্ট 'user' সেট হবে
                    setRole(loggedInUser?.role || 'user');
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    const navLinkStyles = ({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-400'
        }`;

    // লোডিং অবস্থায় একটি সুন্দর স্কেলেটন বা মেসেজ
    if (loading) return <div className="p-5 text-gray-400 bg-gray-900 h-screen">Loading Menu...</div>;

    return (
        <div className="flex flex-col h-screen p-5 bg-gray-900 text-white border-r border-gray-700 w-64">
            <div className="mb-8 flex items-center gap-2 px-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold">BH</div>
                <h2 className="text-xl font-bold tracking-tight">Dashboard</h2>
            </div>

            <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
                <NavLink to="/dashboard/Profile" className={navLinkStyles}>
                    <CgProfile className="text-xl" /> My Profile
                </NavLink>

                <div className="my-4 border-t border-gray-800"></div>

                {/* অ্যাডমিন সেকশন */}
                {(role === 'admin' || role === 'admine') && (
                    <div className="flex flex-col gap-1">
                        <p className="text-[10px] font-bold text-gray-500 uppercase px-3 mb-2 tracking-widest">Admin Panel</p>
                        <NavLink to="/dashboard" end className={navLinkStyles}>
                            <AiOutlineHome className="text-xl" /> Admin Home
                        </NavLink>
                        <NavLink to="/dashboard/manageUsers" className={navLinkStyles}>
                            <MdManageAccounts className="text-xl" /> Manage Users
                        </NavLink>
                        <NavLink to="/dashboard/manageBooks" className={navLinkStyles}>
                            <MdOutlineLibraryBooks className="text-xl" /> Manage Books
                        </NavLink>
                    </div>
                )}

                {/* ইউজার সেকশন - কন্ডিশনটি আরও স্পষ্ট করা হয়েছে */}
                {role === 'user' && (
                    <div className="flex flex-col gap-1 mt-2">
                        <p className="text-[10px] font-bold text-gray-500 uppercase px-3 mb-2 tracking-widest">User Panel</p>
                        <NavLink to="/dashboard/myBooks" className={navLinkStyles}>
                            <MdOutlineLibraryBooks className="text-xl" /> My Books
                        </NavLink>
                        <NavLink to="/dashboard/addBooks" className={navLinkStyles}>
                            <MdOutlinePostAdd className="text-xl" /> Add New Book
                        </NavLink>
                    </div>
                )}
            </nav>

            <div className="mt-auto pt-5 border-t border-gray-800">
                <NavLink to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 text-gray-400 transition-all">
                    <AiOutlineHome className="text-xl" /> Back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
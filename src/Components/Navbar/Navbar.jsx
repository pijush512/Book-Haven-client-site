import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContex';
import toast, { Toaster } from 'react-hot-toast';
import { CgLogOut, CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from 'react-icons/md';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navLinkStyles = ({ isActive }) => 
    isActive 
      ? "text-indigo-400 font-bold underline underline-offset-8 decoration-2" 
      : "hover:text-indigo-400 transition-all duration-300";

  const links = (
    <>
      <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
      <li><NavLink to="/allBooks" className={navLinkStyles}>All Books</NavLink></li>
      <li><NavLink to="/about" className={navLinkStyles}>About Us</NavLink></li>
      <li><NavLink to="/contact" className={navLinkStyles}>Contact</NavLink></li>
      <li><NavLink to="/service" className={navLinkStyles}>Services</NavLink></li>
    </>
  );

  return (
    <div className='bg-gray-900 sticky top-0 z-50 shadow-2xl border-b border-gray-800 backdrop-blur-lg bg-opacity-95'>
      <div className="navbar w-11/12 mx-auto py-3">
        <Toaster position="top-center" />
        
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-2xl z-[1] mt-3 w-52 p-4 shadow-2xl border border-gray-100">
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <img className='h-7 w-7 object-contain brightness-0 invert' src="https://i.ibb.co.com/ynM8D2yC/download-2-removebg-preview.png" alt="Book Logo" />
            </div>
            {/* <span className="text-xl font-black text-white tracking-tighter hidden md:block group-hover:text-indigo-400 transition-colors">BOOK HAVEN</span> */}
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1 text-gray-300 gap-8">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-900 hover:scale-105 transition-all">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL || "https://i.ibb.co/mRpg6Yv/user-placeholder.png"} alt="User" />
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-white rounded-2xl z-[1] w-64 p-4 shadow-2xl mt-4 border border-gray-100 text-gray-800">
                <div className="px-2 py-3 border-b border-gray-100 mb-3">
                    <p className="text-sm font-black text-gray-900">{user.displayName || "Reader"}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                <li>
                    <Link to="/dashboard/profile" className="flex items-center gap-3 py-3 hover:bg-indigo-50 rounded-xl group transition-all"> 
                        <CgProfile className='text-xl text-indigo-600 group-hover:scale-110 transition-transform' /> 
                        <span className="font-bold text-sm">My Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="flex items-center gap-3 py-3 hover:bg-indigo-50 rounded-xl group transition-all"> 
                        <MdOutlineDashboard className='text-xl text-indigo-600 group-hover:scale-110 transition-transform' /> 
                        <span className="font-bold text-sm">My Dashboard</span>
                    </Link>
                </li>
                <li className="mt-3">
                    <button onClick={handleSignOut} className="flex items-center justify-center gap-2 py-3 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-xl transition-all duration-300 border border-red-100">
                        <CgLogOut className='text-xl' />
                        <span className="font-bold uppercase tracking-widest text-xs">Sign Out</span>
                    </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className="px-5 py-2 text-sm text-gray-300 font-bold hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/register" className="px-6 py-2.5 text-sm text-white font-bold bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-900/20 transition-all active:scale-95">
                Join Free
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
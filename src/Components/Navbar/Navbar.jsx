import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { AuthContext } from '../../context/AuthContex';
import toast, { Toaster } from 'react-hot-toast';


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

  const links = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/allBooks">All Books</NavLink>
    <NavLink to="/addBooks">Add Books</NavLink>
    <NavLink to="/myBooks">My Books</NavLink>
  </>

  return (
    <div className='bg-[#687FE5]'>
      <div className="navbar w-11/12 mx-auto">
        <Toaster position="top-center" />
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost">
            <img className='w-40 hidden sm:block'
              src="https://i.ibb.co.com/VYr9XMZ7/BookLogo.png" alt="Book Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1 text-white flex gap-6">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (

            <div className="flex items-center gap-3">
              {user.photoURL && (
                <img src={user.photoURL} className="w-10 h-10 rounded-full border" alt="User" />
              )}
              <button onClick={handleSignOut}
                className="px-6 py-2 bg-white text-purple-500 font-bold rounded hover:bg-purple-100 transition">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="px-6 py-2 bg-white text-blue-500 font-bold rounded hover:bg-blue-100 transition">
                Login
              </Link>
              <Link to="/register" className="px-6 py-2 bg-white text-purple-500 font-bold rounded hover:bg-purple-100 transition">
                Register
              </Link>
            </div>
          )}

        </div>
      </div >
    </div>

  );
};

export default Navbar;
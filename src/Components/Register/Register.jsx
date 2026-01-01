import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../context/AuthContex';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const Register = () => {
  const { createUser, logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return setError("Password must be at least 6 characters and include both uppercase & lowercase letters.");
    }

    createUser(email, password)
      .then(result => {
        const currentUser = result.user;

        // Update user profile
        return updateProfile(currentUser, {
          displayName: name,
          photoURL: photo
        });
      })
      .then(() => {
        toast.success("Registration successful!");
        navigate("/");
      })
      .catch(error => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then(() => {
        toast.success("Google login successful!");
        navigate("/");
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Toaster position="top-center" ></Toaster>
      <div className="card bg-base-100 w-full max-w-sm mx-auto m-h-screen shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold text-center mt-5">Register</h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" />
            <label className="label">Photo Url</label>
            <input type="text" name="photo" className="input" placeholder="Photo Url" />
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            {error && <p className="text-red-500 mt-1">{error}</p>}
            <p>You have an account? Please
              <Link to="/login" className='font-extrabold hover:text-blue-500'> Login</Link>
            </p>

            <button type="submit" className="btn btn-primary mt-4">Register</button>
            <button type="button" onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

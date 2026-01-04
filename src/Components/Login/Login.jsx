import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 'react-router' এর বদলে 'react-router-dom' ব্যবহার করুন
import { AuthContext } from '../../context/AuthContex';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { signIn, logInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                toast.success("Login successful!");
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    role: 'user'
                };


                fetch('https://book-haven-server-site.vercel.app/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        toast.success("Google login successful!");
                        navigate("/");
                    });
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Toaster position="top-center" />
            <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl">
                <h1 className="text-5xl font-bold text-center mt-5">Login</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">

                        <div>
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" required />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input input-bordered w-full" placeholder="Password" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <p className="text-sm">Don't have an account?
                            <Link to="/register" className='font-bold text-indigo-600 hover:underline ml-1'>Register</Link>
                        </p>

                        <button type="submit" className="btn btn-primary text-white">Login</button>

                        <div className="divider text-xs text-gray-400 uppercase">OR</div>

                        <button
                            onClick={handleGoogleSignIn}
                            type="button"
                            className="btn btn-outline flex items-center gap-2"
                        >
                            <svg width="20" height="20" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            Login with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

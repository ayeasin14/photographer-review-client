import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import img02 from '../../assets/login/2.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { Login, googleSignIn } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        Login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
            })
            .catch(err => {
                const errorMessage = err.message;
                console.error(err);
                setError(errorMessage);
            })
    }


    const handleGoogleSignIn = (provider) => {

        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
            })
            .catch(err => {
                const errorMessage = err.message;
                console.error(err);
                setError(errorMessage);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200 my-10" >
            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:w-1/2 lg:text-left">
                    <img className='w-5/6' src={img02} alt="" />
                </div>

                <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-red-600 font-lg mb-3'>{error}</p>
                                <input type="submit" className='btn btn-primary' value="Login" />
                            </div>
                        </form>
                        <hr className='border border-green-700' />
                        <div className='flex justify-center'>
                            <button className='btn btn-outline btn-success' onClick={() => handleGoogleSignIn(provider)}>
                                <FaGoogle className='mr-2' /> Sign In with
                            </button>
                        </div>
                        <div>
                            <label className="label">
                                <p>Don't have account? <Link to='/register' className="link link-hover text-rose-500">Register</Link></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;
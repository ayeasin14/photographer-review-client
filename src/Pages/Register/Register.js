import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img01 from '../../assets/login/1.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const [error, setError] = useState('');
    const provider = new GoogleAuthProvider();
    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

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

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const fullname = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;

        if (confirmPass !== password) {
            alert("Please make sure your password is same")
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })

        console.log(fullname, email, password, confirmPass);



    }

    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:w-1/2 lg:text-left">
                    <img className='w-5/6' src={img01} alt="" />
                </div>

                <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h1 className="text-5xl text-center font-bold">Register!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='fullname' placeholder="Full Name" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm password</span>
                                </label>
                                <input type="password" name='confirmPass' placeholder="Confirm password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-red-600 font-lg'>{error}</p>
                                <input type="submit" className='btn btn-primary' value="Register" />
                            </div>
                        </form>
                        <hr className='border border-amber-500' />
                        <div className='flex justify-center'>
                            <button className='btn btn-outline btn-success' onClick={() => handleGoogleSignIn(provider)}>
                                <FaGoogle className='mr-2' /> Sign In with
                            </button>
                        </div>
                        <hr />
                        <div>
                            <label className="label">
                                <p>Already have account? <Link to='/login' className="link link-hover text-rose-500">Login</Link></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
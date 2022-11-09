import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (




        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value="Login" />
                                {/* <button className="btn btn-primary">Login</button> */}
                            </div>
                        </form>
                        <div>
                            <label className="label">
                                <p>Don't have account? <Link to='/register' className="link link-hover text-rose-500">Register</Link></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
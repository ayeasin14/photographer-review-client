import React from 'react';
import { Link } from 'react-router-dom';
import img01 from '../../assets/login/1.png'

const Register = () => {

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
                                <input type="submit" className='btn btn-primary' value="Register" />
                            </div>
                        </form>
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
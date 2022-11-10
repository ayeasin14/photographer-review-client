import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const menuItems = <>
        <li><Link to="/home" >Home</Link></li>
        <li><Link to="/services" >Services</Link></li>
        <li><Link to="/blogs" >Blogs</Link></li>
        {
            user?.uid ?

                <>
                    <li><Link to="/reviews" >My Review</Link></li>
                    <li><Link to="/addservice" >Add Service</Link></li>
                </>
                :

                <>
                    <li><Link to="/login" >Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </>
        }

    </>


    return (
        <div className="navbar bg-base-100 drop-shadow-2xl sticky top-0 z-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-10 mr-2' src={logo} alt="" />
                    <span className='lg:block md:block hidden'>ShootGrapy</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {user?.uid ?
                        <div className='flex justify-between items-center'>
                            <h3 className='text-lg mr-2 font-medium'>{user?.displayName ? <p> {user.displayName} </p> : <p>Welcome here</p>}</h3>
                            {user?.photoURL ? <img src={user?.photoURL} className='w-10 rounded-full' alt="" /> : <FaUserCircle className='text-3xl' />}
                            <button onClick={userSignOut} className='btn btn-outline btn-error ml-2' >Sign Out</button>
                        </div>
                        :
                        ""
                        // <div className=''>
                        //     <Link to="/login" ><button className='btn btn-outline btn-primary mr-2'>Login</button></Link>
                        //     <Link to="/register" ><button className='btn btn-outline btn-primary'>Register</button></Link>
                        // </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
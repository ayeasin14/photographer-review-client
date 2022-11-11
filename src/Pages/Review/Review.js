import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = ({ review }) => {


    const { user } = useContext(AuthContext);
    const { name, details } = review;
    return (
        <div className='flex justify-between items-center my-6'>
            <div className='mx-3'>
                <button className='btn btn-circle btn-outline btn-error btn-sm'>X</button>
            </div>

            <div className="avatar mx-2">
                <div className="w-12 rounded-full">
                    {user?.photoURL ? <img src={user?.photoURL} className='w-10 rounded-full' alt="" /> : <FaUserCircle className='text-3xl' />}
                </div>
            </div>

            <div className='mx-2'>
                <div className="font-bold">{name}</div>
                <div className='overflow-x-hidden'>{details ? <p>{details.slice(0, 100)}</p> : ''}</div>
            </div>
            <button className="btn btn-warning btn-sm">Edit</button>
        </div>
    );
};

export default Review;
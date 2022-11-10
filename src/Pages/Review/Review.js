import React from 'react';

const Review = ({ review }) => {
    const { name, email, details } = review;
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table">

                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th className=''>Review</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>
                                <label>
                                    <button className='btn btn-circle btn-outline btn-error btn-sm'>X</button>
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm opacity-50">{email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className=''>
                                <span className='overflow-x-hidden'>{details}</span>
                            </td>

                            <th>
                                <button className="btn btn-warning btn-sm">Edit</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Review;
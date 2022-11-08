import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Review</th>
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
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>

                            <th>
                                <button className="btn btn-warning btn-sm">Edit</button>
                            </th>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>

                        </tr>
                    </tfoot>

                </table>
            </div>

        </div>
    );
};

export default Review;
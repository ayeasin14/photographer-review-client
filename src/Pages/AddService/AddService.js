import React from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {
    return (
        <div className="card flex-shrink-0 w-4/6 mx-auto my-10 shadow-2xl bg-base-100">
            <div className="card-body">
                <form>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='serviceTitle' placeholder="Service Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Image URL</span>
                        </label>
                        <input type="text" name='serviceTitle' placeholder="Image URL" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Service Price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        {/* <input type="text" name='details' placeholder="Description" className="input input-bordered" /> */}
                        <textarea name="details" id="" cols="30" rows="10" className='border' />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className='btn btn-primary' value="Add Service" />
                        {/* <button className="btn btn-primary">Login</button> */}
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddService;
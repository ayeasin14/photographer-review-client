import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, title, img, description, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description ? description.slice(0, 110) + " See more..." : description}</p>
                <div className="card-actions justify-between">
                    <p className='text-xl font-bold text-yellow-500'>Price: ${price}</p>
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
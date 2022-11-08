import React from 'react';
import Review from '../Review/Review';

const ServiceDetails = () => {
    return (
        <div className="card card-compact my-10 bg-base-100 shadow-xl w-10/12 mx-auto">
            <img className='w-10/12 mx-auto' src="https://placeimg.com/400/225/arch" alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <div className='mx-10'>
                <hr className='border border-emerald-700' />
                <h1 className='text-3xl my-3 text-center font-semibold'>Customer's reviews about this service.</h1>
                <Review></Review>
            </div>
            <div className='m-10'>
                <h1 className='font-bold text-xl my-3'>Write your feedback here.</h1>
                <textarea name="review" className='rounded-lg w-full textarea textarea-accent text-xl' id="" cols="30" rows="10" placeholder="Write your review here at least 100 char..." /> <br />
                <input type="submit" className='btn btn-info my-3' value="Submit" />
            </div>
        </div>
    );
};

export default ServiceDetails;
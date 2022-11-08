import React from 'react';
import banner from '../../../assets/banner-home.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='relative my-6'>
            <div className="banner-img image-full">
                <img alt='' className='rounded-box' src={banner} />
            </div>
            <div className='absolute top-1/4 right-20'>
                <h1 className='text-7xl text-white font-bold'>Shoot your <br /> Best Time</h1>
                <button className="btn btn-outline btn-warning my-3">Check Our Services</button>
            </div>
        </div>
    );
};

export default Banner;
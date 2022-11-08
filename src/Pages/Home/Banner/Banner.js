import React from 'react';
import banner from '../../../assets/banner-home.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='relative m-5'>
            <div className="banner-img image-full">
                <img alt='' className='rounded-box' src={banner} />
            </div>
            <div className='absolute top-1/4 right-20'>
                <h1 className='text-7xl text-white font-bold'>Shoot your <br /> Best Time</h1>
            </div>
        </div>
    );
};

export default Banner;
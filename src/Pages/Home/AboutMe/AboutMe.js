import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../../assets/me.jpg';

const AboutMe = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='p-10 m-2 w-1/2 shadow-2xl'>
                    <img src={me} alt='' className="rounded-3xl" />
                </div>
                <div className='w-1/2 p-10'>
                    <h1 className="text-5xl font-bold">Who I am !!!</h1>
                    <p className="py-6">I am a professional who focuses on the art of taking images with the use of a digital or traditional film camera. I am knowledgeable in the proper utilization and care of high-end cameras. I generally work as a freelancer and often hired to capture memories of unique clients.</p>
                    <Link to='/services'><button className="btn btn-primary">Hire me!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
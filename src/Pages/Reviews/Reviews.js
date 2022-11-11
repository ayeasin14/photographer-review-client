import React from 'react';
import useTitle from '../../hooks/useTitle';

const Reviews = () => {
    useTitle('My Reviews');

    return (
        <div>
            <h1 className='text-4xl text-blue-600 font-bold text-center my-52'>All reviews are shown here</h1>
        </div>
    );
};

export default Reviews;
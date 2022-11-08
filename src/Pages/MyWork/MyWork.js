import React from 'react';
import img1 from '../../assets/mywork/p11-full.jpg'
import img2 from '../../assets/mywork/p13-full.jpg'
import img3 from '../../assets/mywork/p2-full.jpg'
import img4 from '../../assets/mywork/p3-full.jpg'
import img5 from '../../assets/mywork/p6-full.jpg'

const MyWork = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>My Last Work</h1>
                <p className='my-6 font-semibold mx-auto w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate numquam nemo obcaecati aliquam magni doloribus, laborum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet?</p>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                <img src={img1} alt="" />
                <img src={img5} alt="" />
                <img src={img3} alt="" />
                <img src={img2} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default MyWork;
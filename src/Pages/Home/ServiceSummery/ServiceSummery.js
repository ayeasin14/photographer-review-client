import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Service/Service';

const ServiceSummery = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-6'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Our Services</h1>
                <p className='my-6 font-semibold mx-auto w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate numquam nemo obcaecati aliquam magni doloribus, laborum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet?</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='flex justify-center my-10'>
                <Link to='/services'>
                    <button className='w-44 btn btn-warning  '>See All...</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceSummery;
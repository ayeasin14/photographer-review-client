import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Service from '../Service/Service';

// import Service from '../Service/Service';

const Services = () => {
    useTitle('Services');

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://photographer-review-server-eight.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;
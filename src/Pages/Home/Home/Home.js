import React from 'react';
import MyWork from '../../MyWork/MyWork';
import Banner from '../Banner/Banner';
import ServiceSummery from '../ServiceSummery/ServiceSummery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyWork></MyWork>
            <ServiceSummery></ServiceSummery>
        </div>
    );
};

export default Home;
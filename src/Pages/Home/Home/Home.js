import React from 'react';
import MyWork from '../../MyWork/MyWork';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ServiceSummery from '../ServiceSummery/ServiceSummery';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <ServiceSummery></ServiceSummery>
            <AboutMe></AboutMe>
            <MyWork></MyWork>
        </div>
    );
};

export default Home;
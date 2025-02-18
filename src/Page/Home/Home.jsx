import React from 'react';
import FeaturesSection from './FeaturesSection';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className=''>
            <HeroSection/>
            <FeaturesSection/>
            <Testimonials/>
            
        </div>
    );
};

export default Home;
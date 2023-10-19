import React from 'react';
import Hero from '../components/home/Hero';
import Brands from '../components/home/Brands';
import Reviews from '../components/home/Reviews';
import About from '../components/home/About';

const Home = () => {
    return (
        <>
            <Hero />
            <Brands />
            <About />
            <Reviews />
        </>
    );
};

export default Home;

import React from 'react';
import About from './About';
import Carousels from './Carousel';
import Clients from './Clients';
import Services from './Services';

const Home = () => {
    return (
        <>
            <Carousels></Carousels>
            <About></About>
            <Services></Services>
            <Clients></Clients>
        </>
    );
};

export default Home;
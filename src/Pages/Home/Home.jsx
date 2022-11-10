import React from 'react';
import { Helmet } from 'react-helmet';
import About from './About';
import Carousels from './Carousel';
import Clients from './Clients';
import FAQ from './FAQ';
import Services from './Services';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | NEXT </title>
            </Helmet>
            <Carousels></Carousels>
            <About></About>
            <Services></Services>
            <Clients></Clients>
            <FAQ></FAQ>
        </>
    );
};

export default Home;
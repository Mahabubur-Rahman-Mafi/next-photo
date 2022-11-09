import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import './Service.css'

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='service-card container'>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;
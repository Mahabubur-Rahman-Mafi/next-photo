import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import './Service.css'
import { Helmet } from 'react-helmet';

const Services = () => {
    const services = useLoaderData()
    return (
      <>
        <Helmet>
          <title>Service | NEXT </title>
        </Helmet>
        <div className="service-card container">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </>
    );
};

export default Services;
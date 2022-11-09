import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { image, name, des, price } = service;
    console.log(service);
    return (
      <Container>
        <PhotoView src={image}>
          <img src={image} style={{ objectFit: "cover" }} alt="" />
        </PhotoView>
      </Container>
    );
};

export default ServiceDetails;
import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { image, name, des, price } = service;
  console.log(service);
  return (
    <Container>
      <h1 className="mt-4">{name}</h1>
      <PhotoProvider>
        <PhotoView src={image}>
          <img src={image} alt="" className="w-100 mt-4" />
        </PhotoView>
        {/* details section  */}
        <h2 className="mt-4">Details</h2>
        <p>{des}</p>
        {/* ___ */}
      </PhotoProvider>
    </Container>
  );
};

export default ServiceDetails;

import React from "react";
import {Container} from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaCaretSquareRight } from "react-icons/fa";
import "./Service.css";
import Review from "./Review";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { image, name, des, price, _id } = service;
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
        {/* {price section} */}
        <h3 className="mt-4 text-center">Price</h3>
        <div className="price-table-section">
          <div className="price-single">
            <h2 className="text-center">Basic</h2>
            <div className="px-3 price-section mt-3">
              <p>
                <FaCaretSquareRight className="me-2" />
                {price?.basic
                ?.click} Clicks
              </p>
              <p>
                <FaCaretSquareRight className="me-2" />
                {price?.basic.amount}$(only)
              </p>
              <p>
                <FaCaretSquareRight className="me-2" />
                {price?.basic.time} Days Delivery
              </p>
            </div>
          </div>
          <div className="price-single">
            <h2 className="text-center">Premium</h2>
            <div className="px-3 price-section mt-3">
              <p>
                <FaCaretSquareRight className="me-2" />
                {price?.Premium?.click} Clicks
              </p>
              <p>
                <FaCaretSquareRight className="me-2" />
                {price?.Premium?.amount}$(only)
              </p>
              <p>
                <FaCaretSquareRight className="me-2" />
                {price?.Premium?.time} Days Delivery
              </p>
            </div>
          </div>
          <div className="price-single">
            <h2 className="text-center">Gold</h2>
            <div className="px-3 price-section mt-3">
              <p>
                <FaCaretSquareRight className="me-2" />
                {price?.Gold?.click} Clicks
              </p>
              <p>
                <FaCaretSquareRight className="me-2" />
                {price?.Gold?.amount}$(only)
              </p>
              <p>
                <FaCaretSquareRight className="me-2" />
                {price?.Gold?.time} Days Delivery
              </p>
            </div>
          </div>
        </div>
        <Review service={service}></Review>
      </PhotoProvider>
    </Container>
  );
};

export default ServiceDetails;

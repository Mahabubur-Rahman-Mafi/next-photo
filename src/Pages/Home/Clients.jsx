import React from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/logo/logo-1.png";
import img2 from "../../Assets/logo/logo-2.png";
import img3 from "../../Assets/logo/logo-3.png";
import img4 from "../../Assets/logo/logo-4.png";
import img5 from "../../Assets/logo/logo-5.png";
import img6 from "../../Assets/logo/logo-6.png";
import img7 from "../../Assets/logo/logo-7.png";
import img8 from "../../Assets/logo/logo-8.png";
import img9 from "../../Assets/logo/logo-9.png";

const Clients = () => {
  return (
    <div>
      <h1 className="text-center mt-4 mb-4">Our Clients</h1>
      <Carousel>
        <Carousel.Item>
          <Row className="text-center  w-100">
            <Col lg={3} sm={6}>
              <img src={img1} alt="" className="w-25" />
            </Col>
            <Col lg={3} sm={6}>
              <img src={img2} alt="" className="w-25" />
            </Col>
            <Col lg={3} sm={6}>
              <img src={img3} alt="" className="w-25" />
            </Col>
            <Col lg={3} sm={6}>
              <img src={img4} alt="" className="w-25" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="text-center">
            <Col lg={3} sm={6}>
              <img src={img5} alt="" className="w-25" />
            </Col>
            <Col lg={3} sm={6}>
              <img src={img6} alt="" className="w-25" />
            </Col>
            <Col lg={3} sm={6}>
              <img src={img7} alt="" className="w-25" />
            </Col>
            <Col lg={3} sm={6}>
              <img src={img8} alt="" className="w-25" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="text-center">
            <Col lg={3} sm={6}>
              <img src={img9} alt="" className="w-25" />
            </Col>
            <Col lg={3} sm={6}>
              <img src={img1} alt="" className="w-25" />
            </Col>
            <Col lg={3} sm={6}>
              <img src={img2} alt="" className="w-25" />
            </Col>
            <Col lg={3} sm={6}>
              <img src={img3} alt="" className="w-25" />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Clients;

import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/carousel/image-1-min.jpg";
import img2 from "../../Assets/carousel/image-2-min.jpg";
import img3 from "../../Assets/carousel/image-3-min.jpg";
import img4 from "../../Assets/carousel/image-4-min.jpg";
import img5 from "../../Assets/carousel/image-5-min.jpg";

const Carousels = () => {
  return (
    <Container className="mt-4">
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carousels;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Assets/logo-lg.png";

const Footer = () => {
  return (
    <Container>
      <Row className="text-center align-items-center">
        <Col lg={4} md={6} sm={1}>
          <img
            src={logo}
            width="130"
            height="55"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <p>
            <span>'Next'</span> is photography company. where you can by or sell
            or review your photos.
          </p>
        </Col>
        <Col lg={4} md={6} sm={1} className="text-center">
          <p>&copy; By Next. All right services to 2022</p>
        </Col>
        <Col lg={4} md={6} sm={1}>
          <p>
            Design & Developed by{" "}
            <span>
              {" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mahabubdesign/"
              >
                <span className="fw-semibold">Mahabubur Rahman</span>
              </a>
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

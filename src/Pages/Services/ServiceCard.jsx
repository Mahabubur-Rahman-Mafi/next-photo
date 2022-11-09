import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, name, des, image} = service
    return (
      <Card >
        <Card.Img variant="top" src={image} />
        <Card.Body>
                <Card.Title>{ name}</Card.Title>
          <Card.Text>
           {des.split('',100)}
          </Card.Text>
          <Link to={`/services/${_id}`}><Button variant="primary">View More</Button></Link>
        </Card.Body>
      </Card>
    );
};

export default ServiceCard;
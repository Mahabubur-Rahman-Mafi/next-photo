import React from 'react';
import Card from "react-bootstrap/Card";

const SerCard = ({ s }) => {
    const { name, des, image} = s;
    return (
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {des.split('',100)}
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default SerCard;
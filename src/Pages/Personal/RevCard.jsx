import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { UserAuth } from '../../Auth/AuthContext';

const RevCard = ({ rev }) => {
    const { user } = useContext(UserAuth)
  const { serviceName, text, _id } = rev
  
  const deteleButton = () => {
    
  }
    return (
      <div>
        <Card className='mb-4'>
          <Card.Header>
            <h3>ServiceName: {serviceName}</h3>
          </Card.Header>
          <Card.Body>
            <Card.Title>{user?.displayName}</Card.Title>
            <Card.Text>
              <FaQuoteLeft />
              <p className="mb-0 my-2 fw-semibold">{text} </p>
              <FaQuoteRight className='mb-0'/>
            </Card.Text>
            <div className="text-end">
              <Button variant="outline-danger" className="me-2" onClick={deteleButton}>
                Delete
              </Button>
              <Button variant="outline-success">Update</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
};

export default RevCard;
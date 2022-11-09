import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import SerCard from './SerCard';
import './Home.css'
import { Link } from 'react-router-dom';

const Services = () => {
  const [ser, setSer] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/services3")
      .then(res => res.json())
      .then(data => setSer(data))
    .catch(e=>console.log(e))
  }, [])
    return (
      <>
        <Container>
          <h1 className="text-center mt-5 ">Services</h1>
          <div className="service-section">
            {ser.map((s) => (
              <SerCard s={s} key={s._id}></SerCard>
            ))}
          </div>
          <Link to='/services' className='text-center'>
            <Button className="service-button mb-4 mt-3">
              View Some
            </Button>
          </Link>
        </Container>
      </>
    );
};

export default Services;
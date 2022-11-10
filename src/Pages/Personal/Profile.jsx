import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../Auth/AuthContext';

const Profile = () => {
    const {user} =useContext(UserAuth)
    return (
      <>
        <Helmet>
          <title>Profile | Next</title>
        </Helmet>
        <Container>
                <h1 className="text-center mb-4">My profile</h1>
                <h2 >Name: {user?.displayName}</h2>
                <h4 className='mb-3'>Email: {user?.email}</h4>
                <Link to='/'><Button variant='outline-success' className='fw-4'> Go to Home</Button></Link>
        </Container>
      </>
    );
};

export default Profile;
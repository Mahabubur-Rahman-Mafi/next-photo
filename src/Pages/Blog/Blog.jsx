import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
      <>
        <Helmet>
          <title>Blog | NEXT </title>
        </Helmet>
        <Container>
          <h1>This is blog section</h1>
        </Container>
      </>
    );
};

export default Blog;
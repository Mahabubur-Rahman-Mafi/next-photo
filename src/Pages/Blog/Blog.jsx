import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Card from "react-bootstrap/Card";
import image from '../../Assets/blog/jwt-min.jpg'
import image2 from '../../Assets/blog/node-min.jpg'
import image3 from '../../Assets/blog/nodejs-min.jpg'
import image4 from '../../Assets/blog/sql-min.jpg'
const Blog = () => {
    return (
      <>
        <Helmet>
          <title>Blog | NEXT </title>
        </Helmet>
        <Container>
          <Card className="mb-4">
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Difference between SQL and NoSQL</Card.Title>
              <Card.Text>
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>
                What is the difference between javascript and NodeJS?
              </Card.Title>
              <Card.Text>
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed. Node.
                js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>What is JWT, and how does it work?</Card.Title>
              <Card.Text>
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines
                a compact and self-contained way for securely transmitting
                information between parties as a JSON object. This information
                can be verified and trusted because it is digitally signed.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>
                How does NodeJS handle multiple requests at the same time?
              </Card.Title>
              <Card.Text>
                How NodeJS handle multiple client requests? NodeJS receives
                multiple client requests and places them into EventQueue. NodeJS
                is built with the concept of event-driven architecture. NodeJS
                has its own EventLoop which is an infinite loop that receives
                requests and processes them.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
};

export default Blog;
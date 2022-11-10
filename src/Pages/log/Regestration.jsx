import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image2 from "../../Assets/registration.png";
import { UserAuth } from "../../Auth/AuthContext";

import "./Shared.css";

const Regestration = () => {
  const [error, setError] = useState("");
  const { createUser, googleAuthProvider, nameUpdate, setUser, user } =
    useContext(UserAuth);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation()
  
   const from = location.state?.from?.pathname || "/";

  const handlefrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        nameUpdate(name);
      })
      .catch((e) => {
        setError(e.message);
        form.reset();
      });
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate]);

  const handlegooglebutton = () => {
    googleAuthProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Helmet>
        <title> Registration | NEXT </title>
      </Helmet>
      <div className="login-form">
        <h1 className="text-center p-4 mb-4">Create an account</h1>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Image src={image2} className="w-100"></Image>
            </Col>
            <Col>
              <Form className="from--reg-control" onSubmit={handlefrom}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter your name"
                    name="name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </Form.Group>
                <p>{error}</p>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3 mb-3 w-100 py-2 fs-5"
                >
                  Create an account
                </Button>
                <hr />
                <p className="text-center mb-0">
                  Already, Have an account? <Link to="/login">Log in</Link>
                </p>
                <hr />
                <Button
                  className="mt-3 mb-0 w-100 py-2 fs-5"
                  variant="outline-success"
                  onClick={handlegooglebutton}
                >
                  <FaGoogle /> Go with Google
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Regestration;

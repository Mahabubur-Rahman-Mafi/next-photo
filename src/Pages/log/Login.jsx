import React, { useContext, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image2 from "../../Assets/login-min.png";
import { FaGoogle } from "react-icons/fa";
import "./Shared.css";

import { GoogleAuthProvider } from "firebase/auth";
import { UserAuth } from "../../Auth/AuthContext";

const Login = () => {
  const { googleAuthProvider, userLogIn } = useContext(UserAuth);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const location =useLocation()

   const from = location.state?.from?.pathname || "/";

  const handlefrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(e.message);
        form.reset()
      });
  };

  const handlegooglebutton = () => {
    googleAuthProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="login-form">
      <h1 className="text-center pt-5 mb-1">Log In</h1>
      <Container>
        <Row className="align-items-center">
          <Col>
            <Image src={image2} className="w-100"></Image>
          </Col>
          <Col>
            <Form className="from-control" onSubmit={handlefrom}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email'/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="mt-3 mb-4 w-100 py-2 fs-5"
              >
                Log In
              </Button>
              <hr />
              <p className="text-center">
                Have an account? <Link to="/registration">Sign Up</Link>
              </p>
              <p>{error}</p>
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
  );
};

export default Login;

import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../../Auth/AuthContext";
import Form from "react-bootstrap/Form";

const Review = ({ service }) => {
  const { name, _id } = service;
  const { user } = useContext(UserAuth);
  const location = useLocation();

  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const text = e.target.text.value;
    e.target.reset();
    console.log(email, text);
    const review = {
      serviceId: _id,
      serviceName: name,
      email,
      text,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
      body: JSON.stringify(review)
    })
          .then(res => res.json())
          .then(data => console.log(data))
      .cath(e=>console.log(e))
  };

  return (
    <div>
      {user?.uid ? (
        <>
          <h1>Reviews</h1>

          <Form className="w-75 mx-auto" onSubmit={handleForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                defaultValue={user.email}
                name="email"
                readOnly
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} name="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add My Review
            </Button>
          </Form>
        </>
      ) : (
        <div className="text-center">
          <Link to="/login" state={{ from: location }} replace>
            {" "}
            <Button>Please log in to view Review</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Review;

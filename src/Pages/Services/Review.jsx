import Button from "react-bootstrap/Button";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Link, useLocation, useParams } from "react-router-dom";
import { UserAuth } from "../../Auth/AuthContext";
import Form from "react-bootstrap/Form";
import AllRevCard from "./AllRevCard";
import toast from "react-hot-toast";

const Review = ({ service }) => {
  const { name, _id } = service;
  const { user, loader } = useContext(UserAuth);
    const [review, setReview] = useState([]);
    const [error, setError] =useState('')
  const location = useLocation();
  const param = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${param.id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((e) => console.log(e));
  }, []);
  if (loader) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden text-center">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
      const text = e.target.text.value;
      const wr = "hi there how are you";
      console.log(wr.length);
      if (text.length >20) {
        e.target.reset();
        const review = {
          serviceId: _id,
          serviceName: name,
          email,
          text,
            name: user.displayName,
          date: new Date()
        };
        fetch("http://localhost:5000/reviews", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Thank you for your review");
          })
              .cath((e) => console.log(e));
          setError('')
      }
      else {
          setError('Please write at lest 20 Characters.')
      }
  };

  return (
    <div>
      <h1 className="text-center mt-5">Reviews</h1>
      {user?.uid ? (
        <>
          {review.length === 0 ? (
            <p className="text-center my-5">No Review yet</p>
          ) : (
            <div className="review-section mb-5 mt-4 w-75 mx-auto">
              {review.map((rev) => (
                <AllRevCard key={_id} rev={rev}></AllRevCard>
              ))}
            </div>
          )}
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
              <Form.Label>Write about your experience.</Form.Label>
              <Form.Control as="textarea" rows={3} name="text" />
            </Form.Group>
            <p className="text-danger">{error}</p>
            <Button variant="primary" type="submit">
              Add My Review
            </Button>
          </Form>
        </>
      ) : (
        <div className="text-center ">
          <Link to="/login" state={{ from: location }} replace>
            {" "}
            <Button> Please log in to view Review</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Review;

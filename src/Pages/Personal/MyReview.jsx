import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { UserAuth } from "../../Auth/AuthContext";
import Spinner from "react-bootstrap/Spinner";
import RevCard from "./RevCard";

const MyReview = () => {
  const { user, loader } = useContext(UserAuth);
  const [review, setReview] = useState([]);

  const url = `https://nexl-photography-server.vercel.app/reviews?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);
  if (loader) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden text-center">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-center mt-5 mb-5">Your Review</h1>
      {review.length === 0 ? (
        <p className="text-center">You don't give any review yet</p>
      ) : (
        <>
          {review.map((rev) => (
            <RevCard key={rev._id} rev={rev}></RevCard>
          ))}
        </>
      )}
    </Container>
  );
};

export default MyReview;

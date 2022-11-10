import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { UserAuth } from "../../Auth/AuthContext";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const RevCard = ({ rev }) => {
  const { user } = useContext(UserAuth);
  const { serviceName, text, _id } = rev;
  const [show, setShow] = useState(false);
  const deteleButton = () => {
    // alert
    const okay = window.confirm("Are you want to delete it?");

    if (okay) {
      fetch(`https://nexl-photography-server.vercel.app/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("You review has been removed");
          console.log(data);
        });
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButton = (e) => {
    e.preventDefault();
    const text = e.target.review.value;
    const update = {
      text,
    };
    fetch(`https://nexl-photography-server.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review update");
        setShow(false);
      });
  };
  return (
    <div>
      {/* review card */}
      <Card className="mb-4">
        <Card.Header>
          <h3>ServiceName: {serviceName}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>{user?.displayName}</Card.Title>
          <Card.Text>
            <FaQuoteLeft />
            <p className="mb-0 my-2 fw-semibold">{text} </p>
            <FaQuoteRight className="mb-0" />
          </Card.Text>
          <div className="text-end">
            <Button
              variant="outline-danger"
              className="me-2"
              onClick={deteleButton}
            >
              Delete
            </Button>
            <Button variant="outline-success" onClick={handleShow}>
              Update
            </Button>
          </div>
        </Card.Body>
      </Card>
      {/* _____ */}

      {/* modal section  */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Review</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleButton} className="p-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              name="review"
              defaultValue={text}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default RevCard;

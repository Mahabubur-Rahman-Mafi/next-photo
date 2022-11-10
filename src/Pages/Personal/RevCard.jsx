import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import toast from 'react-hot-toast';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { UserAuth } from '../../Auth/AuthContext';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


const RevCard = ({ rev }) => {
    const { user } = useContext(UserAuth)
  const { serviceName, text, _id } = rev
  const [rest, setRest] = useState()
  const [show, setShow] = useState(false);


  
  
 

  const deteleButton = () => {
    const okay = window.confirm('Are you want to delete it?')
    console.log(`http://localhost:5000/reviews/${_id}`);
    if (okay) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE"
      })
        .then(res => res.json)
      .then(data=>{
        toast.success("You review has been removed");
        console.log(data)
      })
    }
  }

  const handleShow = () => setShow(true);
  const handleClose = (e) => {
    console.log(e.target.innerText);
    console.log(e.target.parentNode.parentNode.children[1].innerHTML);
    setShow(false);
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
        <Form>
          <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Update your review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Control as="textarea" rows={3} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Update
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </div>
    );
};

export default RevCard;
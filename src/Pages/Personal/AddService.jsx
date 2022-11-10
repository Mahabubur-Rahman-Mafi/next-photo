import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddService = () => {
  const [error, setError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.serviceName.value;
    const image = form.image.value;
    const des = form.text.value;
    console.log(name, image, des);
    if (des.length > 30) {
      form.reset();
      setError("");
      const service = {
        name,
        image,
        des,
      };
      fetch("http://localhost:5000/services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(service),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .cath((e) => console.log(e));
    } else {
      setError("Please write at lest 30 Characters.");
    }
  };
  return (
    <Container>
      <h1 className="text-center mt-4 mb-4">Add your Own Services</h1>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            name="serviceName"
            placeholder="Enter service name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            placeholder="Enter Image Url"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="text" required />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button type="submit" variant="outline-success">
          Add you service
        </Button>
      </Form>
    </Container>
  );
};

export default AddService;

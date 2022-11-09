import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../../Assets/imgSlide.jpg";

const About = () => {
  return (
    <div className="mt-5 container">
      <h1 className="text-center mb-4">About</h1>
      <Row>
        <Col lg={6} sm={12}>
          <img src={img} alt="" className="w-100 img-fluid" />
        </Col>
        <Col lg={6} sm={12}>
          <p>
            Sports is more than just action shots. A great sports photographer
            captures each part of the sporting event, telling an entire story
            through their photos. You can also do this by focusing on three
            different types of photos you can take during a sporting event.
            <br></br>
            As the name implies, these photos focus on{" "}
            <span className="fw-semibold">the action</span> in the game. It’s
            the jump shots, the goalie saves, the finish line crosses. These
            photos require you to anticipate the action of the game and be
            scanning the field and moving with the action.{" "}
            <span className="fw-semibold">Graphical photos</span> are not as
            well known as the other two types of photos but they are often the
            most spectacular shots. In graphical photos, photographers tell the
            story through little details and small moments.
            <br />
            Sports photographers also capture the{" "}
            <span className="fw-semibold">emotions</span> of the athlete and the
            game. You want to think about the bigger story of the game, more
            than just the plays. It may be capturing an injured athlete being
            support from his teammate. Or the fans reactions after a
            game-winning shot.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;

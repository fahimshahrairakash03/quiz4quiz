import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Topics = ({ topic }) => {
  const { id, logo, name } = topic;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>
            <p className="text-center">{name}</p>
          </Card.Title>
          <Card.Text>
            It is so wonderful that you can test yourselft by attending the
            quizes of <p className="fw-bold">{name}</p>
          </Card.Text>
          <Link to={`topics/${id}`}>
            {" "}
            <Button variant="info">Click to Attend Quizes</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Topics;

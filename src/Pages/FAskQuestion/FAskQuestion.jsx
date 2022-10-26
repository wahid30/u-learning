import React from "react";
import Card from "react-bootstrap/Card";

const FAskQuestion = () => {
  return (
    <div className="my-5 d-grid gap-2">
      <Card>
        <Card.Body>How can i learn from this sites?</Card.Body>
      </Card>
      <Card>
        <Card.Body>Is it technical or commercial?</Card.Body>
      </Card>
      <Card>
        <Card.Body>Web vs programming?</Card.Body>
      </Card>
      <Card>
        <Card.Body>Is it job based or freelancing based?</Card.Body>
      </Card>
      <Card>
        <Card.Body>Future of this course?</Card.Body>
      </Card>
    </div>
  );
};

export default FAskQuestion;

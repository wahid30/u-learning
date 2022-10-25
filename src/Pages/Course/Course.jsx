import React from "react";
import { Card, Image } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Course = () => {
  const course = useLoaderData();
  const { author, details, title, _id, image_url } = course;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2"></div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Image fluid src={image_url}></Image>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default Course;

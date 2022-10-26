import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Course = () => {
  const course = useLoaderData();
  const { author, details, title, _id, image_url, rating, price } = course;
  return (
    <div className="mt-5">
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Button variant="danger">DownLoad Pdf</Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Image fluid src={image_url}></Image>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
          <p className="text-success fs-5">Price:{price}</p>
          <p className="text-danger">Rating: {rating.number}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;

import React from "react";
import { Card, Image } from "react-bootstrap";

const CourseSummaryCard = (course) => {
  const { title, image_url, details, _id } = course.course;
  // console.log(title);
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center"></Card.Header>
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

export default CourseSummaryCard;

import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseSummaryCard = ({ course }) => {
  const { title, image_url, details, _id } = course;
  // console.log(title);
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Button variant="danger">DownLoad Pdf</Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Image fluid src={image_url}></Image>
          <Card.Text>{details}</Card.Text>
          <Card.Text>
            <Link to={`/course/${_id}`}>
              <Button>Get Premium</Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummaryCard;

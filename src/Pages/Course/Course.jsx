import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Course = () => {
  const course = useLoaderData();
  const { details, title, image_url, rating, price } = course;
  return (
    <div className="mt-5">
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Pdf targetRef={ref} filename="course.pdf">
            {({ toPdf }) => (
              <Button variant="danger" onClick={toPdf}>
                DownLoad Pdf
              </Button>
            )}
          </Pdf>
        </Card.Header>
        <div ref={ref}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Image className="img-fluid" src={image_url}></Image>
            <Card.Text>{details}</Card.Text>
          </Card.Body>
          <Card.Body className="d-flex justify-content-between">
            <p className="text-success fs-5">Price:{price}</p>
            <p className="text-danger">Rating: {rating.number}</p>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Course;

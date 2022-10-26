import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseSummaryCard = ({ course }) => {
  const { title, image_url, details, _id } = course;
  // console.log(title);
  return (
    <div>
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
        <Card.Body>
          <div ref={ref}>
            <Card.Title>{title}</Card.Title>
            <Image className="img-fluid" src={image_url}></Image>
            <Card.Text>{details}</Card.Text>
          </div>
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

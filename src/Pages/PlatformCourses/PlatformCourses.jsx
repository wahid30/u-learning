import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const PlatformCourses = ({ category }) => {
  // console.log(category);
  const { id, name, img, details } = category;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img fluid variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {details.length > 100 ? details.slice(0, 100) + "...." : details}
          </Card.Text>
          <Link to={`/category/${category.id}`}>
            <Button variant="primary">Explore</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlatformCourses;

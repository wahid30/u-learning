import React from "react";
import Card from "react-bootstrap/Card";
const ErrorPage = () => {
  return (
    <div className="container my-5 p-5">
      <Card className="text-center p-5 bg-warning">
        <Card.Body className="fs-1">
          <strong>404</strong>. Page Not Found
        </Card.Body>
      </Card>
    </div>
  );
};

export default ErrorPage;

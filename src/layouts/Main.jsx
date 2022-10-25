import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="3" className="d-none d-lg-block">
            <div>leftside nav</div>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <div>footer</div>
    </div>
  );
};

export default Main;

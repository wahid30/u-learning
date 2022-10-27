import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/LeftSideBar/LeftSideBar";

const Main = () => {
  return (
    <div>
      {/* for nav bar */}
      <Header></Header>
      {/* for main section */}
      <Container>
        <Row>
          <Col lg="3" className="d-none d-lg-block">
            <LeftSideBar></LeftSideBar>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      {/* for footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;

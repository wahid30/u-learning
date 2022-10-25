import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { HiOutlineIdentification } from "react-icons/hi";
import { Button } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand
            href="#home"
            className="btn btn-light d-flex align-items-center"
          >
            <HiOutlineIdentification className="fs-3" />
            <Link to="/" className="text-decoration-none text-black">
              Ulearning
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Button variant="outline-primary">
                  <Link
                    to="/home"
                    className="text-decoration-none custom-hover"
                  >
                    Home
                  </Link>
                </Button>
              </Nav.Link>
              <Nav.Link href="#link">
                <Button variant="outline-primary">
                  <Link
                    to="/courses"
                    className="text-decoration-none custom-hover"
                  >
                    Courses
                  </Link>
                </Button>
              </Nav.Link>
              <Nav.Link href="#link">
                <Button variant="outline-primary">
                  <Link
                    to="/blogs"
                    className="text-decoration-none custom-hover"
                  >
                    Blogs
                  </Link>
                </Button>
              </Nav.Link>
              <NavDropdown title="FAQ" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link>Logout</Nav.Link>
              <Nav.Link eventKey={2}>login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

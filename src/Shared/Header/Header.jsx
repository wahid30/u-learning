import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { HiOutlineIdentification } from "react-icons/hi";
import { Button, Image } from "react-bootstrap";
import "./Header.css";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaRegUser, FaSun, FaMoon } from "react-icons/fa";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand className="btn btn-light d-flex align-items-center">
            <Link to="/" className="text-decoration-none text-black">
              <HiOutlineIdentification className="fs-3" />
            </Link>
            <Link to="/" className="text-decoration-none text-black">
              Ulearning
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/home" className="text-decoration-none ">
                  <Button className="custom-hover" variant="outline-primary">
                    Home
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/courses" className="text-decoration-none">
                  <Button className=" custom-hover" variant="outline-primary">
                    Courses
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/blogs" className="text-decoration-none ">
                  <Button className="custom-hover" variant="outline-primary">
                    Blogs
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/faq" className="text-decoration-none ">
                  <Button className="custom-hover" variant="outline-primary">
                    FAQ
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2}>
                {user?.uid ? (
                  <>
                    <Button onClick={handleLogOut}>LogOut</Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button className="custom-hover" variant="outline-danger">
                        Login
                      </Button>
                    </Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2}>
                {user?.photoURL ? (
                  <Image
                    title={user?.displayName}
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaRegUser></FaRegUser>
                )}
                <>
                  {open ? (
                    <FaMoon
                      onClick={() => setOpen(!open)}
                      className="ms-3"
                    ></FaMoon>
                  ) : (
                    <FaSun
                      className="ms-3"
                      onClick={() => setOpen(!open)}
                    ></FaSun>
                  )}
                </>
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideBar></LeftSideBar>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

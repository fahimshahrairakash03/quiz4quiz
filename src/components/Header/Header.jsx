import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="">
            <Nav.Link>
              {" "}
              <Link to="">Home</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="blog">Blog</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="">Statistics</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

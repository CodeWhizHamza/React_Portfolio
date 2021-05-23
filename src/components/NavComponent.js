import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavComponent.css";

class NavComponent extends Component {
  render() {
    return (
      <div style={{ bodyBackground: "#F1F5F8" }}>
        <Navbar bg={"dark"} variant={"dark"} expand="lg">
          <Navbar.Brand href="/home">Arjun Gautam</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            {/*<Nav className="m-lg-auto">*/}
            <Nav className="m-lg-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            {/*<Form inline>*/}
            {/*  <FormControl*/}
            {/*    type="text"*/}
            {/*    placeholder="Search"*/}
            {/*    className="mr-sm-2"*/}
            {/*  />*/}
            {/*  <Button variant="outline-success">Search</Button>*/}
            {/*</Form>*/}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavComponent;

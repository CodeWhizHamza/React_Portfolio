import React, { Component } from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import './NavComponent.css'

class NavComponent extends Component {
  render() {
    return (
      <div style={{bodyBackground:"#F1F5F8"}}>
        <Router>
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

                <Nav.Link as={Link} to="/Contact">
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

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default NavComponent;

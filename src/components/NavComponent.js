import React, { Component } from "react";
import {Form, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavComponent.css";
import {Button, FormControl, Toolbar} from "@material-ui/core";
import {
  CloudDownloadOutlined,
  CloudDownloadRounded,
  CloudDownloadSharp,
  FontDownloadOutlined
} from "@material-ui/icons";

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
            <Button
                className={"pro-btn"}
                href={"https://drive.google.com/uc?export=download&id=1gDB_xA66clXV-66R5iUOVVU024Dcd4CT"}
                // target={"_blank"}
                style={{ backgroundColor: "#1E2228", color: "white" }}
                variant="outlined"
            >
              <CloudDownloadOutlined style={{marginRight:"12px"}}/>

              <div style={{marginTop:"2px"}}> Download My Resume
              </div>


            </Button>

          </Navbar.Collapse>

        </Navbar>


      </div>
    );
  }
}

export default NavComponent;

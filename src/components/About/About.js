import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>About</h1>
        <Link to={"/Contact"}>Contact</Link>
      </div>
    );
  }
}

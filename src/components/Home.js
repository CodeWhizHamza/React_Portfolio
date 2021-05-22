import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className={"home"}>
        <div className="container">
          <div className="row">
            <div className="col">I am Arjun Gautam</div>
            <div className="col">
              <div className={"software"}>I am Software Developer</div>
            </div>
            <div className="col">Column</div>
          </div>
        </div>
      </div>
    );
  }
}

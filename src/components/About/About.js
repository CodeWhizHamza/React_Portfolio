import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <Grid container >
        <Grid item md={1} sm={12} xs={12}></Grid>
        <Grid style={{marginTop:"25px"}} item md={5} sm={12} xs={12}>
          <div>
            <h1 className={"heading"}>About Me</h1>
            <div
              style={{
                border: "1px dashed white",
                boxSizing: "content-box",
                width: "30%",
              }}
            />

            <p className={"about"} style={{paddingTop:"30px"}}>
              Hi there ! I'm Arjun Gautam aspiring web developer based in
              Kathmandu, Nepal. I describe myself as someone who's persistent, a
              quick learner and loves problem solving by using simple and
              scalable solutions.
              <br />I am always up for new challenges. While I strive for
              perfection, I also believe in not making perfect the enemy of
              good.
            </p>
          </div>
          <div className={"education"}>
            <h1 className={"heading"}>Education</h1>
            <div
              style={{
                border: "1px dashed white",
                boxSizing: "content-box",
                width: "30%",
              }}
            />
            <h5 className={"about"}>
              Bachelor in Computer Science, Tribhuvan University
            </h5>
            <h6 style={{ paddingLeft: "15px" }}>Kathmandu, Nepal</h6>
          </div>

          <div className={"skills"}>
            <h1 className={"heading"}>Skills</h1>
            <div
              style={{
                border: "1px dashed white",
                boxSizing: "content-box",
                width: "30%",
              }}
            />
            <div className={"about"}>
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                <h5>Expertise on </h5>{" "}
              </span>
              Spring Boot, Java, React.js, Javascript, MySQL
              <br />
              <br />
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                <h5>Familiar with </h5>{" "}
              </span>
              Material UI, Bootstrap4, Flutter, Spark Java, HTML, CSS
            </div>
          </div>
        </Grid>
        <Grid style={{marginTop:"25px"}} item md={5} sm={12} xs={12}>

          <h1 className={"heading"}>Industrial Experience</h1>
            <div
                style={{
                    border: "1px dashed white",
                    boxSizing: "content-box",
                    width: "60%",
                }}
            />
            <h5 className={"about"} style={{textDecoration:"underline",paddingTop:"30px"}}>MOCO Digital Wallet, 2020-2021</h5>
            <p style={{color:"white",paddingLeft:"15px"}}>Worked as a Junior Java Develeper. Explored about payment system and worked on the frameworks like spark java and vue js.</p>
            <p className={"about"}>
                <ul>
                    <li>API integration of PayPoint MultiPayment System.</li>
                    <li>
                        Requirement specification gathering and documentation of Reward
                        Management System and Agreement Management System.
                    </li>
                    <li>Learnt how overall payment system works.</li>
                </ul>
            </p>

          <h5 className={"about"} style={{textDecoration:"underline"}}>Texas Imaginology, 2019-2020</h5>
            <p style={{color:"white",paddingLeft:"15px"}}>Designed and Developed ' Student Management System ' software for Texas International College.

            </p>

            <p className={"about"}>
            <ul>
              <li>Designed and developed REST APIs.</li>
              <li>Worked on full stack using Spring, React.js, MySQL.</li>
            </ul>
          </p>
            <h1 className={"heading-interests"}>Interests</h1>
            <div
                style={{
                    border: "1px dashed white",
                    boxSizing: "content-box",
                    width: "25%",
                }}
            />
            <p style={{color:"white",padding:"15px"}}>Public Speaking, Travelling, Problem Solving</p>

        </Grid>
        <Grid item md={1} sm={12} xs={12}></Grid>
      </Grid>
    );
  }
}

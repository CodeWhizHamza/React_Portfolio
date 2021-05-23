import React, { Component } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import ppmtool from "../assets/ppmtool.png";
import aws from "../assets/aws.png";
import ipl from "../assets/ipl.png";
import typing from "../assets/typing.jpg";
import "./Projects.css";

import { GitHub } from "@material-ui/icons";

class Projects extends Component {
  render() {
    return (
      <div className={"projects"}>
        <div>
          <h1 style={{ textAlign: "center", margin: "31px", color: "white" }}>
            PROJECTS
          </h1>
        </div>
        <Grid container>
          {/*Personal Project Management Tool*/}
          <Grid item md={3} sm={6} xs={13}>
            <Card className={"class-root"}>
              <div style={{ backgroundColor: "#22272E", color: "white" }}>
                <CardActionArea>
                  <CardMedia
                    className={"class-media"}
                    image={ppmtool}
                    title="Personal Project Management Tool"
                  />
                  <CardContent className={"card-content"}>
                    <Typography gutterBottom variant="h5" component="h3">
                      Project Management Tool
                    </Typography>
                    <Typography variant="body3" component="p">
                      <div style={{ textAlign: "justify", color: "#757575" }}>
                        User can signup, login and create multiple projects. For
                        each project user can create, view, update project task
                        with status with priority.
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={"card-actions"}>
                  <a
                    href={"https://www.github.com/arjungautam1/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>
                      <GitHub />
                    </Button>
                  </a>

                  <a
                    href={"https://personal-project-manage.herokuapp.com/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button size="small" color="primary">
                      {" "}
                      Website{" "}
                    </Button>
                  </a>
                </CardActions>
              </div>
            </Card>
          </Grid>

          {/*IPL Dashboard*/}

          <Grid item md={3} sm={6} xs={13}>
            <Card className={"class-root"}>
              <div style={{ backgroundColor: "#22272E", color: "white" }}>
                <CardActionArea>
                  <CardMedia
                    className={"class-media"}
                    image={ipl}
                    title="IPL Dashboard"
                  />
                  {/*<CardContent style={{margin:"16px"}}>*/}
                  <CardContent className={"card-content"}>
                    <Typography gutterBottom variant="h5" component="h3">
                      IPL Dashboard
                    </Typography>
                    <Typography variant="body3" color="white" component="p">
                      <div style={{ textAlign: "justify", color: "#757575" }}>
                        IPL Dashboard shows match details of each ipl teams with
                        win/loss stats. Also shows all matches from 2008-2020.
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={"card-actions"}>
                  <a
                    href={"https://github.com/arjungautam1/ipl-dashboard"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>
                      <GitHub />
                    </Button>
                  </a>

                  <a
                    href={"https://github.com/arjungautam1/ipl-dashboard"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button size="small" color="primary">
                      {" "}
                      Website{" "}
                    </Button>
                  </a>
                </CardActions>
              </div>
            </Card>
          </Grid>

          {/*Typing Test*/}
          <Grid item md={3} sm={6} xs={13}>
            <Card className={"class-root"}>
              <div style={{ backgroundColor: "#22272E", color: "white" }}>
                <CardActionArea>
                  <CardMedia
                    className={"class-media"}
                    image={typing}
                    title="Typing Test"
                  />
                  {/*<CardContent style={{margin:"5px"}}>*/}
                  <CardContent className={"card-content"}>
                    <Typography gutterBottom variant="h5" component="h3">
                      Typing Test
                    </Typography>
                    <Typography variant="body3" color="white" component="p">
                      <div style={{ textAlign: "justify", color: "#757575" }}>
                        User can type the given text and check the speed of
                        typing. While typing if the typed text doesn't match the
                        given text, color code mentioned on the websites will be
                        displayed.
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={"card-actions"}>
                  <a
                    href={"https://github.com/arjungautam1/TypingTest"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>
                      <GitHub />
                    </Button>
                  </a>

                  <a
                    href={"https://lasertyping.netlify.app/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button size="small" color="primary">
                      {" "}
                      Website{" "}
                    </Button>
                  </a>
                </CardActions>
              </div>
            </Card>
          </Grid>
          {/*AWS Image Upload*/}
          <Grid item md={3} sm={6} xs={13}>
            <Card className={"class-root"}>
              <div style={{ backgroundColor: "#22272E", color: "white" }}>
                <CardActionArea>
                  <CardMedia
                    className={"aws"}
                    image={aws}
                    title="AWS Image Upload"
                  />
                  {/*<CardContent style={{margin:"10px"}}>*/}
                  <CardContent className={"card-content"}>
                    <Typography gutterBottom variant="h5" component="h3">
                      AWS Image Upload
                    </Typography>
                    <Typography variant="body3" color="white" component="p">
                      <div style={{ textAlign: "justify", color: "#757575" }}>
                        Image upload web application where you can drag and drop
                        image, instantly image will be displayed on the website
                        from S3 bucket(Amazon Web Service).
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={"card-actions"}>
                  <a
                    href={"https://github.com/arjungautam1/AWS_Image_Upload"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>
                      <GitHub />
                    </Button>
                  </a>

                  <a
                    href={"https://github.com/arjungautam1/AWS_Image_Upload"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Button size="small" color="primary">
                      {" "}
                      Website{" "}
                    </Button>
                  </a>
                </CardActions>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Projects;

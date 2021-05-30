import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import './Certification.css'

import fullstack from '../../assets/certificate/fullstack.png'
import spring from '../../assets/certificate/spring.png'
import hackerrank from '../../assets/certificate/hackerrank.png'
import git from '../../assets/certificate/git.png'
import js from '../../assets/certificate/js.png'
import react from '../../assets/certificate/react.png'

export default function Certification() {

    return (

        <div>
            <div>
                <h1 style={{textAlign: "center", margin: "31px", color: "white"}}>
                    Certifications
                </h1>
            </div>
            <Grid container>
                <Grid item md={2} sm={6} xs={12} style={{padding: "15px"}}>
                    <Card className={"card-root"}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="fullstack"
                                height="180"
                                image={fullstack}
                                title="Full Stack Udemy"
                            />
                            <CardContent style={{backgroundColor:"#343A40",color:"white"}}>
                                <Typography  gutterBottom variant="h6" component="h2">
                                    Full Stack: Spring Boot, ReactJS, Redux.

                                </Typography>
                                <Typography variant="body2" color="inherit" component="p">
                                UDEMY
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a
                                href={"https://www.udemy.com/certificate/UC-931eda58-4665-4db3-adeb-7237e11f0907/"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                <Button size="small" color="primary">
                                    See Credential
                                </Button>
                            </a>

                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={2} sm={6} xs={12} style={{padding: "15px"}}>
                    <Card className={"card-root"}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="fullstack"
                                height="180"
                                image={spring}
                                title="Full Stack Udemy"
                            />
                            <CardContent style={{backgroundColor:"#343A40",color:"white"}}>
                                <Typography gutterBottom variant="h6" component="h6">
                                    Spring Framework with Spring Boot.
                                </Typography>
                                <Typography variant="body2" color="inherit" component="p">
                                   UDEMY
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a
                                href={"http://ude.my/UC-d876e626-6e9a-4dc9-868f-41fa28a61322"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                <Button size="small" color="primary">
                                    See Credential
                                </Button>
                            </a>

                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={2} sm={6} xs={12} style={{padding: "15px"}}>
                    <Card className={"card-root"}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="fullstack"
                                height="180"
                                image={hackerrank}
                                title="Full Stack Udemy"
                            />
                            <CardContent style={{backgroundColor:"#343A40",color:"white"}}>
                                <Typography gutterBottom variant="h6" component="h6">
                                   HackerRank Certification for Java.
                                </Typography>
                                <Typography variant="body2" color="inherit" component="p">
                                    HackerRank
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a
                                href={"https://www.hackerrank.com/certificates/33149688b406"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                <Button size="small" color="primary">
                                    See Credential
                                </Button>
                            </a>

                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={2} sm={6} xs={12} style={{padding: "15px"}}>
                    <Card className={"card-root"}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="fullstack"
                                height="180"
                                image={git}
                                title="Full Stack Udemy"
                            />
                            <CardContent style={{backgroundColor:"#343A40",color:"white"}}>
                                <Typography gutterBottom variant="h6" component="h6">
                                    Version Control with Git Atlassian.
                                </Typography>
                                <Typography variant="body2" color="inherit" component="p">
                                    COURSERA
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a
                                href={"https://www.coursera.org/account/accomplishments/certificate/25SUFJYMVH7J"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                <Button size="small" color="primary">
                                    See Credential
                                </Button>
                            </a>

                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={2} sm={6} xs={12} style={{padding: "15px"}}>
                    <Card className={"card-root"}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="fullstack"
                                height="180"
                                image={js}
                                title="Full Stack Udemy"
                            />
                            <CardContent style={{backgroundColor:"#343A40",color:"white"}}>
                                <Typography gutterBottom variant="h6" component="h6">
                                    Modern Javascript : ES6 Basics
                                </Typography>
                                <Typography variant="body2" color="inherit" component="p">
                                    COURSERA
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a
                                href={"https://www.coursera.org/account/accomplishments/certificate/7ETWBTY9AKQF"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                <Button size="small" color="primary">
                                    See Credential
                                </Button>
                            </a>

                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={2} sm={6} xs={12} style={{padding: "15px"}}>
                    <Card className={"card-root"}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="fullstack"
                                height="180"
                                image={react}
                                title="LinkedIn Learning"
                            />
                            <CardContent style={{backgroundColor:"#343A40",color:"white"}}>
                                <Typography gutterBottom variant="h6" component="h6">
                                    Learning React Essential LinkedIn
                                </Typography>
                                <Typography variant="body2" color="inherit" component="p">
                                   LinkedIn Learning
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a
                                href={"https://www.keepandshare.com/doc2/116263/certificateofcompletion-learning-react-js-pdf-206k?da=y"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                <Button size="small" color="primary">
                                    See Credential
                                </Button>
                            </a>

                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={2} sm={6} xs={12} style={{padding: "15px"}}>
                </Grid>


            </Grid>

        </div>

    )
        ;
}

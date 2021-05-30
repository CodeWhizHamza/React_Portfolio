import React, {Component} from 'react';
import {Button, Grid} from "@material-ui/core";
import ReactPlayer from "react-player";
import './Youtube.css'
import YouTubeIcon from '@material-ui/icons/YouTube';

class Youtube extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 style={{textAlign: "center", margin: "31px", color: "white"}}>
                        YOUTUBE
                    </h1>
                    <Grid container>
                        <Grid item md={4} sm={6} xs={12}>
                            <div className="player-wrapper">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=23ydpRdh400&t=480s"
                                    className="react-player"

                                    width="100%"
                                    height="100%"
                                    controls={false}
                                />
                            </div>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <div className="player-wrapper">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=3mYYKzCRGyI"
                                    className="react-player"

                                    width="100%"
                                    height="100%"
                                    controls={false}
                                />
                            </div>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <div className="player-wrapper">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=0wJCxEDDetE&t=20s"
                                    className="react-player"

                                    width="100%"
                                    height="100%"
                                    controls={false}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={"project-btn"}>
                    <Button
                        className={"pro-btn"}
                        variant={"outlined"}
                        href={"https://www.youtube.com/channel/UCJyDMA1hY0gWrCylFD963DA"}
                        startIcon={<YouTubeIcon/>}
                        style={{marginLeft: "10px", backgroundColor: "#373E47", color: "white"}}
                        target={"_blank"}

                    >More Videos
                    </Button>
                </div>
            </div>
        );
    }
}

export default Youtube;
import React from "react";
import {AppBar, Container, IconButton, Tooltip, Typography,} from "@material-ui/core";
import "./Footer.css";
import {GitHub, Instagram, LinkedIn, Twitter, YouTube,} from "@material-ui/icons";

export default function Footer() {
    // const styles = {
    //   button: { margin: 15 },
    //   appBarBackground: { background: "#343A40" },
    // };
    const d = new Date();
    return (
        <div className={"appbar-footer"}>
            <AppBar style={{backgroundColor: "#1E2228"}} position={"static"}>
                <Container style={{textAlign: "center"}} maxWidth="md">
                    {/*<Toolbar >*/}
                    <Typography style={{marginTop: "8px"}} color="inherit">
                        © {d.getFullYear()} ARJUN GAUTAM, ALL RIGHTS RESERVED
                        <div className={"footer-icon"}>
                            <Tooltip title="In/arjungautam1" placement="top">
                                <IconButton
                                    className={"icon-button"}
                                    color={"inherit"}
                                    onClick={() =>
                                        window.open(
                                            "https://www.linkedin.com/in/arjungautam1/",
                                            "_blank"
                                        )
                                    }
                                >
                                    <LinkedIn fontSize="small"/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="arjungautam1" placement="top">
                                <IconButton
                                    className={"icon-button"}
                                    color={"inherit"}
                                    onClick={() =>
                                        window.open("https://www.github.com/arjungautam1", "_blank")
                                    }
                                >
                                    <GitHub fontSize="small"/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Arjun Codes" placement="top">
                                <IconButton
                                    className={"icon-button"}
                                    color={"inherit"}
                                    onClick={() =>
                                        window.open(
                                            "https://www.youtube.com/channel/UCJyDMA1hY0gWrCylFD963DA",
                                            "_blank"
                                        )
                                    }
                                >
                                    <YouTube fontSize="small"/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="arjungauatm5431" placement="top">
                                <IconButton
                                    className={"icon-button"}
                                    color={"inherit"}
                                    onClick={() =>
                                        window.open(
                                            "https://www.instagram.com/arjungautam5431",
                                            "_blank"
                                        )
                                    }
                                >
                                    <Instagram fontSize="small"/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Twitter/ArjunCodes" placement="top">
                                <IconButton
                                    className={"icon-button"}
                                    color={"inherit"}
                                    onClick={() =>
                                        window.open("https://twitter.com/CodesArjun", "_blank")
                                    }
                                >
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    <Twitter fontSize="small"/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Typography>
                    {/*</Toolbar>*/}
                </Container>
            </AppBar>
        </div>
    );
}

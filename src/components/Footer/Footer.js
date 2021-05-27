import React from "react";
import {Typography,} from "@material-ui/core";
import "./Footer.css";

export default function Footer() {
  const d = new Date();
  return (
    <div className={"appbar-footer"}>
      <div style={{ color: "white", textAlign: "center" }}>
        <Typography style={{backgroundColor:"#1E2228",padding:"5px"}}>
          <span style={{ backgroundColor: "#1E2228" }}>
            © {d.getFullYear()} ARJUN GAUTAM, ALL RIGHTS RESERVED
          </span>
          {/*<div style={{backgroundColor:"#1E2228"}}>*/}
          {/*  <Tooltip title="In/arjungautam1" placement="top">*/}
          {/*    <IconButton*/}
          {/*      className={"icon-button"}*/}
          {/*      color={"inherit"}*/}
          {/*      onClick={() =>*/}
          {/*        window.open(*/}
          {/*          "https://www.linkedin.com/in/arjungautam1/",*/}
          {/*          "_blank"*/}
          {/*        )*/}
          {/*      }*/}
          {/*    >*/}
          {/*      <LinkedIn fontSize="small" />*/}
          {/*    </IconButton>*/}
          {/*  </Tooltip>*/}
          {/*  <Tooltip title="arjungautam1" placement="top">*/}
          {/*    <IconButton*/}
          {/*      className={"icon-button"}*/}
          {/*      color={"inherit"}*/}
          {/*      onClick={() =>*/}
          {/*        window.open("https://www.github.com/arjungautam1", "_blank")*/}
          {/*      }*/}
          {/*    >*/}
          {/*      <GitHub fontSize="small" />*/}
          {/*    </IconButton>*/}
          {/*  </Tooltip>*/}
          {/*  <Tooltip title="Arjun Codes" placement="top">*/}
          {/*    <IconButton*/}
          {/*      className={"icon-button"}*/}
          {/*      color={"inherit"}*/}
          {/*      onClick={() =>*/}
          {/*        window.open(*/}
          {/*          "https://www.youtube.com/channel/UCJyDMA1hY0gWrCylFD963DA",*/}
          {/*          "_blank"*/}
          {/*        )*/}
          {/*      }*/}
          {/*    >*/}
          {/*      <YouTube fontSize="small" />*/}
          {/*    </IconButton>*/}
          {/*  </Tooltip>*/}

          {/*  <Tooltip title="arjungauatm5431" placement="top">*/}
          {/*    <IconButton*/}
          {/*      className={"icon-button"}*/}
          {/*      color={"inherit"}*/}
          {/*      onClick={() =>*/}
          {/*        window.open(*/}
          {/*          "https://www.instagram.com/arjungautam5431",*/}
          {/*          "_blank"*/}
          {/*        )*/}
          {/*      }*/}
          {/*    >*/}
          {/*      <Instagram fontSize="small" />*/}
          {/*    </IconButton>*/}
          {/*  </Tooltip>*/}

          {/*  <Tooltip title="Twitter/ArjunCodes" placement="top">*/}
          {/*    <IconButton*/}
          {/*      className={"icon-button"}*/}
          {/*      color={"inherit"}*/}
          {/*      onClick={() =>*/}
          {/*        window.open("https://twitter.com/CodesArjun", "_blank")*/}
          {/*      }*/}
          {/*    >*/}
          {/*      /!* eslint-disable-next-line react/jsx-no-undef *!/*/}
          {/*      <Twitter fontSize="small" />*/}
          {/*    </IconButton>*/}
          {/*  </Tooltip>*/}
          {/*</div>*/}
        </Typography>
      </div>
    </div>
  );
}

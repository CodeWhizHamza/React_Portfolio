import React, { Component } from 'react'
import './Home.css'
import { Box, Button, Grid, IconButton, Tooltip } from '@material-ui/core'
import avatar from '../../assets/arjun.png'
import { Link } from 'react-router-dom'

import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@material-ui/icons'

export default class Home extends Component {
  render() {
    return (
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Box
            style={{ marginTop: '100px' }}
            display={{ xs: 'none', md: 'block', sm: 'block' }}
          />
          <Box
            style={{ marginTop: '6px' }}
            display={{ xs: 'block', md: 'block', sm: 'block' }}
          />
        </Grid>
        <Grid item md={2} sm={6} />
        <Grid item md={4} sm={12} xs={12}>
          <div className="intro">
            <div style={{ marginTop: '30px' }}>
              <h1 className="home-title">I'm Arjun Gautam</h1>
              <p className="home-slogan">Full Stack Java Developer</p>
            </div>

            <div className={'home-icon'}>
              <Tooltip title="In/arjungautam1" placement="top">
                <IconButton
                  className={'icon-button'}
                  color={'inherit'}
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/arjungautam1/',
                      '_blank'
                    )
                  }
                >
                  <LinkedIn fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="arjungautam1" placement="top">
                <IconButton
                  className={'icon-button'}
                  color={'inherit'}
                  onClick={() =>
                    window.open('https://www.github.com/arjungautam1', '_blank')
                  }
                >
                  <GitHub fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Arjun Codes" placement="top">
                <IconButton
                  className={'icon-button'}
                  color={'inherit'}
                  onClick={() =>
                    window.open(
                      'https://www.youtube.com/channel/UCJyDMA1hY0gWrCylFD963DA',
                      '_blank'
                    )
                  }
                >
                  <YouTube fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="arjungauatm5431" placement="top">
                <IconButton
                  className={'icon-button'}
                  color={'inherit'}
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/arjungautam5431',
                      '_blank'
                    )
                  }
                >
                  <Instagram fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Twitter/ArjunCodes" placement="top">
                <IconButton
                  className={'icon-button'}
                  color={'inherit'}
                  onClick={() =>
                    window.open('https://twitter.com/CodesArjun', '_blank')
                  }
                >
                  {/* eslint-disable-next-line react/jsx-no-undef */}
                  <Twitter fontSize="large" />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div className={'home-btn'}>
            <div className={'about-button'}>
              <Link to={'/About'} style={{ textDecoration: 'none' }}>
                <Button
                  style={{
                    backgroundColor: '#343A40',
                    color: 'white',
                    margin: '20px 20px 20px -5px',
                  }}
                  variant="outlined"
                >
                  About me
                </Button>
              </Link>
            </div>

            <div className={'home-button'}>
              <Link to={'/Contact'} style={{ textDecoration: 'none' }}>
                <Button
                  style={{
                    backgroundColor: '#343A40',
                    color: 'white',
                    margin: '20px 20px 20px 10px',
                  }}
                  variant="outlined"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs="none">
          <div className={'photo'}>
            <Box display={{ xs: 'block', md: 'block', sm: 'block' }}>
              <img src={avatar} alt={'avatar'} />
            </Box>
          </div>
        </Grid>
        {/*<Grid item md={2} sm={6}></Grid>*/}
      </Grid>
    )
  }
}

import React, { Component } from 'react'
import {
  Button,
  // Card,
  // CardActionArea,
  // CardActions,
  // CardContent,
  // CardMedia,
  // Grid,
  // Typography,
} from '@material-ui/core'
import ppmtool from '../../assets/ppmtool.png'
import aws from '../../assets/img.png'
import ipl from '../../assets/ipl.png'
import typing from '../../assets/typing.png'
import './Projects.css'

import { GitHub, Public } from '@material-ui/icons'

class Projects extends Component {
  render() {
    const cards = [
      {
        image: ppmtool,
        title: 'Project Management Tool',
        body: 'User can signup, login and create multiple projects. For each project user can create, view, update project task with status with priority.',
        link: 'https://github.com/arjungautam1/Personal-Project-Management-Tool/',
        live: 'https://personal-project-manage.herokuapp.com/',
        isWebsite: true,
      },
      {
        image: ipl,
        title: 'IPL Dashboard',
        body: 'IPL Dashboard shows match details of each ipl teams with win/loss stats. Also shows all matches with their corresponding details from 2008-2020.',
        link: 'https://github.com/arjungautam1/ipl-dashboard',
        live: 'http://arjunipldashboard-env.eba-5p5fjhty.us-east-1.elasticbeanstalk.com/',
        isWebsite: true,
      },
      {
        image: aws,
        title: 'AWS Image Upload',
        body: 'Image upload web application where you can drag and drop image, instantly image will be displayed on the website from S3 bucket(Amazon Web Service).',
        link: 'https://github.com/arjungautam1/AWS_Image_Upload',
        live: 'https://github.com/arjungautam1/AWS_Image_Upload',
        isWebsite: false,
      },
      {
        image: typing,
        title: 'Typing Test',
        body: "User can type the given text and check the speed of typing. While typing if the typed text doesn't match the given text, color code mentioned on the websites will be displayed.",
        link: 'https://github.com/arjungautam1/TypingTest',
        live: 'https://lasertyping.netlify.app/',
        isWebsite: true,
      },
    ]
    return (
      <div>
        <div className="projects">
          <h1 className="project-title">PROJECTS</h1>
          <div className="grid">
            {cards.map(card => (
              <div className="item">
                <div className="item__header">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="item__image"
                  />
                </div>
                <div className="item__body">
                  <h3 className="item__title">{card.title}</h3>
                  <p className="item__text">{card.body}</p>
                </div>
                <div className="item__footer">
                  <Button
                    className="item__btn"
                    onClick={() => window.open(card.link, '_blank')}
                    variant="outlined"
                    startIcon={<GitHub />}
                  >
                    Github
                  </Button>
                  <Button
                    className="item__btn"
                    style={{ fontSize: '14px !important' }}
                    onClick={() => window.open(card.live, '_blank')}
                    variant="outlined"
                    startIcon={<Public />}
                  >
                    {card.isWebsite ? 'Website' : 'Source Code'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={'project-btn'}>
          <Button
            className="pro-btn"
            variant="outlined"
            href="https://github.com/arjungautam1"
            startIcon={<GitHub />}
            style={{
              marginLeft: '10px',
              backgroundColor: '#373E47',
              color: 'white',
            }}
            target="_blank"
          >
            More Projects
          </Button>
        </div>
      </div>
    )
  }
}

export default Projects

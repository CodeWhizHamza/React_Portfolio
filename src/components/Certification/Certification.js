import React from 'react'
import { Button } from '@material-ui/core'
import { Public } from '@material-ui/icons'

import './Certification.css'

import fullstack from '../../assets/certificate/fullstack.png'
import spring from '../../assets/certificate/spring.png'
import hackerrank from '../../assets/certificate/hackerrank.png'
import git from '../../assets/certificate/git.png'
import js from '../../assets/certificate/js.png'
import react from '../../assets/certificate/react.png'

export default function Certification() {
  const certificates = [
    {
      image: fullstack,
      title: 'Full Stack: Spring Boot, ReactJS.',
      company: 'UDEMY',
      link: 'https://www.udemy.com/certificate/UC-931eda58-4665-4db3-adeb-7237e11f0907/',
    },
    {
      image: spring,
      title: 'Spring Framework with Spring Boot.',
      company: 'UDEMY',
      link: 'http://ude.my/UC-d876e626-6e9a-4dc9-868f-41fa28a61322',
    },
    {
      image: hackerrank,
      title: 'HackerRank Certificate Java.',
      company: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/33149688b406',
    },
    {
      image: git,
      title: 'Version Control with Git Atlassian.',
      company: 'COURSERA',
      link: 'https://www.coursera.org/account/accomplishments/certificate/25SUFJYMVH7J',
    },
    {
      image: js,
      title: 'Modern Javascript: ES6 Basics',
      company: 'COURSERA',
      link: 'https://www.coursera.org/account/accomplishments/certificate/7ETWBTY9AKQF',
    },
    {
      image: react,
      title: 'Learning React Essential LinkedIn',
      company: 'LinkedIn Learning',
      link: 'https://www.keepandshare.com/doc2/116263/certificateofcompletion-learning-react-js-pdf-206k?da=y',
    },
  ]

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '31px', color: 'white' }}>
        Certifications
      </h1>
      <div className="grid">
        {certificates.map((c, i) => (
          <div key={i} class="item">
            <div className="item__header">
              <img src={c.image} alt={c.title} className="item__image" />
            </div>
            <div className="item__body">
              <h3 className="item__title">{c.title}</h3>
              <h4>{c.company}</h4>
            </div>
            <div className="item__footer">
              <Button
                onClick={window.open(c.link, '_blank')}
                variant="outlined"
                color="#343a40"
                startIcon={<Public />}
              >
                See Credential
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

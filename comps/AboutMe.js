import React from 'react'
import classes from '../styles/AboutMe.module.css';
import $ from 'jquery';

const AboutMe = () => {



  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.picBox}>
          <img className={classes.pic}  src='/face.png'></img>
        </div>
        <div className={classes.info}>
          <h2>About me</h2>
          <p className={classes.city} >Seattle, WA</p>
          <p className={classes.me} >
          My name is Evan, game-development summer camp... I love to program.
          <br/>
          <br/>
          I have experience... agile environments, leading a team of 4-6 engineers to hit deadlines, sprints, etc.
          <br/>
          <br/>
          More stuff about me. Feel free to reach out!
          </p>
          <div className={classes.links}>
            <img className={classes.linkIcons}  src='/ghLogo.png'></img>
            <img className={classes.linkIcons}  src='/liLogo.png'></img>
            <img style={{height: '60px'}} className={classes.linkIcons}  src='/mailLogo.png'></img>
            <span className={classes.resume} >Resume</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

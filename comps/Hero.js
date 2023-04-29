import React from 'react'
import classes from '../styles/Hero.module.css';
import $ from 'jquery';

const Hero = () => {

  React.useEffect(() => {
    if(!window) return;

    let winHeight = $(window).height();
    let navHeight = $('.navbar').height();

    $('#heroDiv').height(winHeight - navHeight - 42);

    // return () => {

    // }
  });

  const hoverOn = () => {
    $('#scheduleBtn').css('box-shadow', '0 0 20px purple')
    .css('text-shadow', '0 0 20px white');
  };
  const hoverOff = () => {
    $('#scheduleBtn').css('box-shadow', 'none')
    .css('text-shadow', 'none');;
  };


  return (
    <div id='heroDiv' className={classes.main}>
      <div className={classes.left}>
        <div className={classes.title}>
          <h1>Hi, I'm Evan</h1>
          <p>I am a <span>software engineer</span></p>
          <span onMouseEnter={hoverOn} onMouseLeave={hoverOff} id='scheduleBtn' className={classes.btn} ><i className="fa-regular fa-calendar-days"></i>Schedule Meeting</span>
        </div>
      </div>
      <div className={classes.right}>
        I am a graphic
      </div>

    </div>
  )
}

export default Hero

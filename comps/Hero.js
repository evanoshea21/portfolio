import React from 'react'
import classes from '../styles/Hero.module.css';
import $ from 'jquery';

const Hero = () => {

  const [inView, setInView] = React.useState(false);

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

  const scrollTest = () => {
    if(!inView) {
      $('.testDiv').css('transform', 'translateY(0%)');
      setInView(prev => !prev);
    } else {
      $('.testDiv').css('transform', 'translateY(-100%)')
      setInView(prev => !prev);
    }
  };

  return (
    <div id='heroDiv' className={classes.main}>
      <div className={classes.left}>
        <div className={classes.title}>
          <h1>Hi, I'm Evan</h1>
          <p>I am a <span>software engineer</span></p>
          <div className={classes.btnAlign}>
            <div onMouseEnter={hoverOn} onMouseLeave={hoverOff} id='scheduleBtn' className={classes.btn} ><i className="fa-regular fa-calendar-days"></i>Schedule Meeting</div>
          </div>

          </div>
      </div>
      <div className={classes.right}>
        <img className={classes.svg}  src='dev.svg'></img>
      </div>

    </div>
  )
}

export default Hero

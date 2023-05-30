import React from 'react'
import classes from '../styles/Hero.module.css';
import $ from 'jquery';
import { useRouter } from 'next/router';
import { Typewriter } from 'react-simple-typewriter'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {

  const router = useRouter();

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
    .css('text-shadow', 'none');
  };
  const openCalendly = () => {
    router.push('https://calendly.com/your360guy/talk-with-evan-software');
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
    <div className={classes.wrap}>

    <div id='heroDiv' className={classes.main}>
      <div className={classes.left}>
        <div className={classes.title}>
          <h1>Hi, I'm Evan</h1>

          <p className={classes.typeBox} >I am a
          <span className={classes.typing}>

            {/* <Typewriter words={['Fullstack', 'Backend', 'Creative']} loop={0} typeSpeed={80} deleteSpeed={50} /> */}
            <TypeAnimation
            sequence={[
              'Fullstack', // Types 'One'
              1500, // Waits 1s
              'Backend', // Deletes 'One' and types 'Two'
              1700, // Waits 2s
              'Efficient',
              1700
            ]}
            // wrapper="span"
            cursor={true}
            repeat={Infinity}
            // style={{ fontSize: '2em', display: 'inline-block' }}
          />

          </span>
          <br/>
          Developer
          </p>


          <div className={classes.btnAlign}>
            <a target="_blank" href='https://calendly.com/your360guy/talk-with-evan-software' onMouseEnter={hoverOn} onMouseLeave={hoverOff} id='scheduleBtn' className={classes.btn} >
              <i className="fa-regular fa-calendar-days"></i>Schedule Meeting
              </a>
          </div>

          </div>
      </div>
      <div className={classes.right}>
        <img className={classes.svg}  src='dev.svg'></img>
      </div>

    </div>
    </div>

  )
}

export default Hero

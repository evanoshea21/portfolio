import React from 'react'
import classes from '../styles/AboutMe.module.css';
import $ from 'jquery';
import { useInViewport } from 'react-in-viewport';

const AboutMe = () => {

  const paraRef = React.useRef();
  const paraVp = useInViewport(paraRef);

  // const [paraY, setParaY] = React.useState('idk');
  // React.useEffect(() => {
  //   $(window).on('scroll', () => {
  //     let win = $(window);
  //     let topScreen = win.scrollTop();

  //     //this checks when element is AT LEAST half way
  //       // up the screen
  //     if(topScreen + (win.height() / 2) > $('#aboutHeader').offset().top) {
  //       console.log('NOW in middle..');
  //     }
  //   });
  //   return () => {
  //     $(window).off();
  //   }
  // });


  React.useEffect(() => {
    if(paraVp.inViewport) {
      console.log('IN VIEW');
      $('#para').css('transform', 'translateY(-5px)');
      $('#para').css('opacity', '1');
      $('#para').css('text-shadow', '0 0 2rem purple');
    } else {
      $('#para').css('transform', 'translateY(0px)');
      $('#para').css('opacity', '0');
      $('#para').css('text-shadow', 'none');
    }
  },[paraVp.inViewport]);


  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.picBox}>
          <img className={classes.pic}  src='/face.png'></img>
        </div>
        <div className={classes.info}>
          <h2 id='aboutHeader'>About me</h2>
          {/* <p>Para from bottom: {paraY}</p> */}
          <p className={classes.city} >Seattle, WA</p>
          <p id='para' ref={paraRef} className={classes.me} >
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
            <span id='resumeBtn' className={classes.resume} >Resume</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

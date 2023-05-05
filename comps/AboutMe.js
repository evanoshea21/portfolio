import React from 'react'
import classes from '../styles/AboutMe.module.css';
import $ from 'jquery';
import { useInViewport } from 'react-in-viewport';
import { useRouter } from 'next/router';

const AboutMe = () => {

  const router = useRouter();
  const paraRef = React.useRef();
  const paraVp = useInViewport(paraRef);


  React.useEffect(() => {
    if(paraVp.inViewport) {
      // console.log('IN VIEW');
      $('#para').css('transform', 'translateY(-5px)');
      $('#para').css('opacity', '1');
      $('#para').css('text-shadow', '0 0 .5rem var(--brightColor)');
    } else {
      $('#para').css('transform', 'translateY(0px)');
      $('#para').css('opacity', '0');
      // $('#para').css('text-shadow', 'none');
    }
  },[paraVp.inViewport]);

  React.useEffect(() => {
    $('#profileimg').on('dragstart', function(event) { event.preventDefault(); });

    return () => { $('#profileimg').off() }
  },[]);


  return (
    <div id='contactAbout' className={classes.main}>
      <div className={classes.container}>
        <div className={classes.picBox}>
          <img id='profileimg' className={classes.pic}  src='/face.png'></img>
        </div>
        <div className={classes.info}>
          <h2 id='aboutHeader'>About me</h2>
          {/* <p>Para from bottom: {paraY}</p> */}
          <p className={classes.city} >Seattle, WA</p>
          <p id='para' ref={paraRef} className={classes.me} >
          My interest for software was piqued when I attended a video-game dev summer camp when I was 13 years old. I instantly became aware and excited of the opportunities in software to bring an idea to the masses with very low startup costs.
          <br/>
          <br/>
          I love building full-stack apps that solve problems creatively with the fewest resources possible. My coding philosophy is to always optimize resource allocation by cutting down unnecessary processes.
          <br/>
          <br/>
          I have experience collaborating and leading teams of 4-6 to execute in an efficient and timely manner. This involves sprint-based AGILE environements, setting up proper git workflow, and setting priorities to meet deadlines. I'm very focused on the synergy of a team to create a cohesive end-product designed with the UX in mind.
          </p>
          <div className={classes.links}>
            <a target="_blank" href='https://github.com/evanoshea21'><img className={classes.linkIcons}  src='/ghLogo.png'></img></a>
            <a target="_blank" href='https://www.linkedin.com/in/evan-oshea/'><img className={classes.linkIcons}  src='/liLogo.png'></img></a>
            <a href="mailto:evanoshea21@gmail.com">
            <img style={{height: '60px'}} className={classes.linkIcons}  src='/mailLogo.png'></img>
            </a>
            <a className={classes.resume} target="_blank" href='https://drive.google.com/file/d/12V0pFJxNx9Wnz4lh9eJF_0TwTtZsm9-O/view?usp=sharing'>
            <span>Resume</span>



            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutMe

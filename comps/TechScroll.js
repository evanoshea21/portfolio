import React from 'react'
import classes from '../styles/TechScroll.module.css';
import $ from 'jquery';

const TechScroll = () => {
  const [speed, setSpeed] = React.useState('25s');

  const speedUpAnim = () => {
    $('.logosClass').css('animation-duration', '5s');
  };
  const slowDownAnim = () => {
    $('.logosClass').css('animation-duration', '35s');
  };


  return (
    <div
    // onMouseEnter={speedUpAnim}
    // onMouseLeave={slowDownAnim}
    className={classes.logos}>

      <div className={`${classes.slide} logosClass`}>
        <img src='/reactLogo.png'></img>
        <img src='/nextLogo.png'></img>
        <img src='/awsLogo.png'></img>
        <img src='/githubLogo.png'></img>
        <img src='/gitLogo.png'></img>
        <img src='/nodeLogo.png'></img>
        <img src='/reactNativeLogo.png'></img>
        <img src='/sqlLogo.png'></img>
      </div>

      <div className={`${classes.slide} logosClass`}>
        <img src='/reactLogo.png'></img>
        <img src='/nextLogo.png'></img>
        <img src='/awsLogo.png'></img>
        <img src='/githubLogo.png'></img>
        <img src='/gitLogo.png'></img>
        <img src='/nodeLogo.png'></img>
        <img src='/reactNativeLogo.png'></img>
        <img src='/sqlLogo.png'></img>
      </div>

    </div>
  )
}

export default TechScroll

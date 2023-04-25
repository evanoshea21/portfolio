import React from 'react'
import classes from '../styles/TechScroll.module.css';

const TechScroll = () => {
  const [speed, setSpeed] = React.useState('25s')


  return (
    <div data-speed={speed} onMouseEnter={() => {setSpeed('5s')}} className={classes.logos}>

      <div className={classes.slide}>
        <img src='/reactLogo.png'></img>
        <img src='/nextLogo.png'></img>
        <img src='/awsLogo.png'></img>
        <img src='/githubLogo.png'></img>
        <img src='/gitLogo.png'></img>
        <img src='/nodeLogo.png'></img>
        <img src='/reactNativeLogo.png'></img>
        <img src='/sqlLogo.png'></img>
      </div>

      <div className={classes.slide}>
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

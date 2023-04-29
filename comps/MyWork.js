import React from 'react'
import classes from '../styles/MyWork.module.css';
import $ from 'jquery';

const projects = [
  {
    title: 'Seattle Speakers',
    role: 'Chief Engineer',
    pic: '/speakersPic.png',
    description: 'This is a membership site that tracks user achiemevents in the realm of public speaking. Admin controls including adding badges to user profiles upon completion of tasks set out by the group. This is an accountability hub, with a community page offering communication to your fellow peer.',
    links: {github: 'https://www.github.com', linkedin: 'https://www.linkedin.com', web: 'https://www.seattlespeakers.us'}
  },
  {
    title: 'Your 360 Guy',
    role: 'Chief Engineer',
    pic: '/speakersPic.png',
    description: 'This is a membership site that tracks user achiemevents in the realm of public speaking. Admin controls including adding badges to user profiles upon completion of tasks set out by the group. This is an accountability hub, with a community page offering communication to your fellow peer.',
    links: {github: 'https://www.github.com', linkedin: 'https://www.linkedin.com', web: 'https://www.seattlespeakers.us'}
  },
  {
    title: 'TechXChange',
    role: 'Chief Engineer',
    pic: '/speakersPic.png',
    description: 'This is a membership site that tracks user achiemevents in the realm of public speaking. Admin controls including adding badges to user profiles upon completion of tasks set out by the group. This is an accountability hub, with a community page offering communication to your fellow peer.',
    links: {github: 'https://www.github.com', linkedin: 'https://www.linkedin.com', web: 'https://www.seattlespeakers.us'}
  },
  {
    title: 'Node Server',
    role: 'Chief Engineer',
    pic: '/speakersPic.png',
    description: 'This is a membership site that tracks user achiemevents in the realm of public speaking. Admin controls including adding badges to user profiles upon completion of tasks set out by the group. This is an accountability hub, with a community page offering communication to your fellow peer.',
    links: {github: 'https://www.github.com', linkedin: 'https://www.linkedin.com', web: 'https://www.seattlespeakers.us'}
  },
]

const MyWork = () => {

  const hoverOn = (e) => {
    $(`.cardHover:nth-child(${e + 1})`).css('transform', 'translateY(-8px)')
    .css('box-shadow', '0 0 50px purple')
  };
  const hoverOff = (e) => {
    $(`.cardHover:nth-child(${e + 1}`)
    .css('transform', 'scale(1)')
    .css('box-shadow', 'none')
  };




  return (
    <div className={classes.main}>
      <h2 className={classes.title} >My Work</h2>
      <div className={classes.projects}>
        {projects.map((card, i) => {
          return (
            <div key={i + 'cardKey'} onMouseEnter={() => hoverOn(i)} onMouseLeave={() => hoverOff(i)} className={ `${classes.card} cardHover`}>
              <div className={classes.picBox}>
                <div className={classes.picSize}>
                  <img className={classes.pic}  src={card.pic}></img>
                </div>
              </div>
              <div className={classes.info}>
                <h2 className={classes.projTitle} >{card.title}</h2>
                <div className={classes.role}>{card.role}</div>
                <div className={classes.desc}>
                  {card.description}
                </div>
                <div className={classes.links}>
                  <i>Link 1</i>
                  <i>Link 2</i>
                  <i>Link 3</i>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyWork

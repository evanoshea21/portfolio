import React from 'react'
import classes from '../styles/MyWork.module.css';
import classes2 from '../styles/AboutMe.module.css';
import $ from 'jquery';
import { useRouter } from 'next/router';

const projects = [
    {
    title: 'Pinning Bees',
    role: 'Fron-end and UI (Photoshop)',
    pic: '/pinningBees.png',
    description: ['A fully responsive, light-weight Front-end site designed with minimal dependencies (jQuery, TS). ', 'Fluid animations add an interactive feel, responsive design implemented tastefully, and a fully functioning contact form.', 'All completed in 3 days from start-to-finish, idea to deployment.'],
    links: {github: 'https://github.com/evanoshea21/pinning-bees', web: 'http://pinningbees.com'}
  },
    {
    title: 'Question & Answers API for Elevated Apparel',
    role: 'Backend Engineer (team of 3)',
    pic: '/qaAPI.jpg',
    description: ['A Deployed Backend RESTful API ready for real-world traffic spikes of up to 10,000 clients/second.','Deployed NginX Load Balancer to AWS EC2 instance to increase throughput from 3200 clients/sec to over 10k clients/sec, dropping error rate from 12% to 0.0% and response time reduced from 16sec to 130ms.'],
    links: {github: 'https://github.com/evanoshea21/QA-API'}
  },
  {
    title: 'Full-stack Membership app',
    role: 'Solo Engineer',
    pic: '/seattleSpeakers.png',
    description: ['This is a membership site that tracks user achiemevents in the realm of public speaking. Admin controls including adding badges to user profiles upon completion of tasks set out by the group.','This is an accountability hub, with a community page offering communication to your fellow peer.'],
    links: {github: 'https://github.com/evanoshea21/seattle-speakers', web: 'https://www.seattlespeakers.us'}
  },
  {
    title: 'Elevated Apparel',
    role: 'Full-stack Engineer (team of 4)',
    pic: '/elevated.jpg',
    description: ['Simplistic yet modern e-commerce site designed with the user in mind.', 'Responsible for the Question and Answers section.', 'Utilized localStorage for caching, jquery scroll animations for infinite scrolling, and created a real-time search bar with React onChange hook.'],
    links: {github: 'https://github.com/atelier-front-end/elevated'}
  },
  {
    title: 'Mobile App for TechXChange',
    role: 'Lead Architect',
    pic: '/techX2.png',
    description: ['A React-Native mobile app that facilitates electronic device trades between users.','Introduced global state with React Context API to pre-load data and reduce redundant http requests.','Full Auth process with photo uploads implemented with Firebase and S3 buckets.'],
    links: {github: 'https://github.com/TechXChange2/React-Native'}
  },

]

const MyWork = () => {

  const router = useRouter();

  const hoverOn = (i) => {
    $(`.cardHover:nth-child(${i + 1})`).css('transform', 'translateY(-4px)')
    .css('box-shadow', '0 0 50px purple')
  };
  const hoverOff = (e) => {
    $(`.cardHover:nth-child(${e + 1}`)
    .css('transform', 'scale(1)')
    .css('box-shadow', 'none')
  };

  const calcHeight = () => {
    $('.infoHeight').each(function(i) {
      let height = $(this).height();
      //now set height of picSize for picSize0
      $(`.picSize${i}`).height(height);
    });

  }

  React.useEffect(() => {
    setTimeout(() => {
      calcHeight()
    }, 0);
  },[]);
//
  return (
    <div id='myWork' className={classes.main}>
      <h2 className={classes.title} >My Work</h2>
      <div className={classes.projects}>

        {/* BIG CARDS */}
        {projects.map((card, i) => {
          return (
            <div key={`${i}bigCard`} onMouseEnter={() => hoverOn(i)} onMouseLeave={() => hoverOff(i)} className={ `${classes.card} cardHover card${i}`}>
              <div className={classes.picBox}>
                <div style={{height: () => calcHeight(e)}} className={`${classes.picSize} picSize${i}`}>
                  <img className={classes.pic}  src={card.pic}></img>
                </div>
              </div>
              <div className={`${classes.info} infoHeight`}>
                <h2 className={classes.projTitle} >{card.title}</h2>
                <div className={classes.role}>{card.role}</div>
                <div className={classes.desc}>
                  {card.description.map((para, i) => {
                    return <p key={`${i}para`}>{para}</p>
                  })}
                </div>
                <div className={classes2.links}>
                  {card.links.github && (
                    <a target="_blank" href={card.links.github}>
                    <img style={{height: '40px'}} className={classes2.linkIcons}  src='/ghLogo.png'></img></a>
                  )}
                  {card.links.web && (
                    <a target="_blank" href={card.links.web}>
                    <img style={{height: '40px'}} className={classes2.linkIcons}  src='/www.png'></img></a>
                  )}

                </div>
              </div>
            </div>

          )
        })}

        {/* SMALL CARD */}
        {projects.map((card, i) => {
          return (
            <div key={`${i}smallCard`} className={classes.cardSmall}>
              <div className={classes.picSizeSm}>
                <img className={classes.picSm}  src={card.pic}></img>
              </div>

              <div className={classes.infoSm}>


              <h2 className={`${classes.projTitle} ${classes.titleSm}`} >{card.title}</h2>
                <div className={`${classes.role} ${classes.roleSm}`}>{card.role}</div>
                <div className={classes.desc}>
                  {card.description.map((para, i) => {
                    return <p key={`${i}para`}>{para}</p>
                  })}
                </div>
                <div className={classes.linksSm}>
                  {card.links.github && (
                    <a target="_blank" href={card.links.github}>
                    <img style={{height: '40px'}} className={classes2.linkIcons}  src='/ghLogo.png'></img></a>
                  )}
                  {card.links.web && (
                    <a target="_blank" href={card.links.web}>
                    <img style={{height: '40px'}} className={classes2.linkIcons}  src='/www.png'></img></a>
                  )}
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

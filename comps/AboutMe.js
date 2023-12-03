import React from "react";
import classes from "../styles/AboutMe.module.css";
import $ from "jquery";
import { useInViewport } from "react-in-viewport";
import { useRouter } from "next/router";

const AboutMe = () => {
  const router = useRouter();
  const paraRef = React.useRef();
  const paraVp = useInViewport(paraRef);

  React.useEffect(() => {
    if (paraVp.inViewport) {
      // console.log('IN VIEW');
      $("#para").css("transform", "translateY(-5px)");
      $("#para").css("opacity", "1");
      $("#para").css("text-shadow", "0 0 .5rem var(--brightColor)");
    } else {
      $("#para").css("transform", "translateY(0px)");
      $("#para").css("opacity", "0");
      // $('#para').css('text-shadow', 'none');
    }
  }, [paraVp.inViewport]);

  React.useEffect(() => {
    $("#profileimg").on("dragstart", function (event) {
      event.preventDefault();
    });

    return () => {
      $("#profileimg").off();
    };
  }, []);

  return (
    <div id="contactAbout" className={classes.main}>
      <div className={classes.container}>
        <div className={classes.picBox}>
          <img id="profileimg" className={classes.pic} src="/face.png"></img>
        </div>
        <div className={classes.info}>
          <h2 id="aboutHeader">About me</h2>
          {/* <p>Para from bottom: {paraY}</p> */}
          <p className={classes.city}>Seattle, WA</p>
          <p id="para" ref={paraRef} className={classes.me}>
            If I were to describe myself, I would say I'm a developer who's
            obsessed about optimized, functional code. I like to build apps with
            a meticulous game-plan in mind to strategize performance gains that
            can be made from the get-go. I've found that planning also ensures a
            smoother, more enjoyable programming experience. The more I prepare
            for edge cases, design a sound architecture, and think through which
            user stories must be developed, the more efficient I'm able to
            create software. Falling into the pattern of reactively addressing
            bugs as they surface is not my style of programing, and I aim to
            bring that approach to any team I am a part of.
            <br />
            <br />
            I build full-stack apps with the help of Typescript, React (with
            Next.js), Node.js, AWS, and SQL databases with the help of Prisma.
            <br />
            <br />
            Mastering this tech stack has afforded me the ability to create
            lighting fast front-ends by server-side-rendering and caching data,
            along with creating highly optimized back-ends through techniques
            like load-balancing and database indexing.
            <br />
            <br />
            If your team could benefit from a programmer who is meticulous about
            proactively accounting for bugs, and one who is also passionate
            about front-end and back-end optimization, then I'm your match.
            <br />
            <br />
            Thank you for viewing my profile. Reach out and let's chat about
            what you're looking for in a developer.
            <br />
            Cheers
          </p>
          <div className={classes.links}>
            <a target="_blank" href="https://github.com/evanoshea21">
              <img className={classes.linkIcons} src="/ghLogo.png"></img>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/evan-oshea/">
              <img className={classes.linkIcons} src="/liLogo.png"></img>
            </a>
            <a href="mailto:evanoshea21@gmail.com">
              <img
                style={{ height: "60px" }}
                className={classes.linkIcons}
                src="/mailLogo.png"
              ></img>
            </a>
            <a
              className={classes.resume}
              target="_blank"
              href="https://drive.google.com/file/d/19u3g50wT8XOv_ew_CYInOTTVZxQByAii/view?usp=sharing"
            >
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

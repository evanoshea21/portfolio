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
          <img id="profileimg" className={classes.pic} src="/profile.jpg"></img>
        </div>
        <div className={classes.info}>
          <h2 id="aboutHeader">About me</h2>
          {/* <p>Para from bottom: {paraY}</p> */}
          <p className={classes.city}>📍 Seattle, WA</p>
          <p id="para" ref={paraRef} className={classes.me}>
            If I were to describe my disposition as a developer, I would say I'm
            a developer who's obsessed with performant & lightweight code, and
            one who prefers to design robust software by focusing my attention
            on the design phase.
            <br />
            <br />
            I like to strategically design systems that are optimized &
            performant from the get-go by predicting bottle-necks that may be
            arise in the future. I keep applications lightweight by being
            resource-conscious, always asking, "is this necessary?" Light-weight
            codebases are easier to read, maintain, and iterate upon.
            <br />
            <br />
            While working in teams, extensive planning has become a vital part
            of my process to ensure faster development times and a smoother
            programming experience. Planning for me involves the following:
            proactively accounting for noticeable edge cases, designing a sound
            architecture to integrate all third-party tools into the tech-stack,
            and deriving a plan of action that prioritizes features addressing
            prominant user stories set by the PMs.
            <br />
            <br />
            I build full-stack apps with the help of Typescript, React (with
            Next.js), Node.js, AWS, and SQL databases in tandem with Prisma.
            <br />
            <br />
            Mastering this tech stack has afforded me the ability to create
            lighting fast front-ends by server-side-rendering and caching data,
            along with creating highly optimized back-ends through techniques
            like load-balancing and database indexing.
            <br />
            <br />
            If your team is looking for a Fullstack Developer who can deliver
            robust software swiftly and smoothly through meticulous planning—and
            one who is passionate about front-end and back-end performance—then
            I’m the right fit for you.
            <br />
            <br />I look forward to hearing from you 👍
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
              href="https://drive.google.com/file/d/1LKyFvoZEEDUOBBkhSjjCA1kbrvJlI3s_/view?usp=sharing"
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

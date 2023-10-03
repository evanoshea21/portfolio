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
            Evan O'Shea is a fullstack developer residing in Seattle, WA. He
            also has a background in Marketing & Design using Photoshop & Adobe
            CC.
            <br />
            <br />
            Evan loves building fullstack apps that solve real problems
            creatively and tastefully, using the fewest resources possible. His
            coding philosophy is to always optimize resource consumption via
            methods like client-side caching, database indexing, and server
            load-balancing.
            <br />
            <br />
            Evan has experience collaborating in (and leading) teams of 4-6
            developers using technologies such as: React, Typescript, Next.js,
            MySQL, Node.js, AWS, Prisma ORM, Git and Photoshop.
            <br />
            <br />
            From working in sprint-based SCRUM environments, setting up
            bullet-proof git workflows, and by discerning priorities to hit
            deadlines, Evan has taken projects from idea to deployment smoothly
            with DRY, easy-to-read code.
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
              href="https://drive.google.com/file/d/1EE85B_aRST7-wu5xnGigZxI9peVVhV3g/view"
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

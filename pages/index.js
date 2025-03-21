import Head from "next/head";
import classes from "@/styles/Home.module.css";
import classes2 from "../styles/AboutMe.module.css";
import Link from "next/link";
import Hero from "../comps/Hero.js";
import TechScroll from "../comps/TechScroll.js";
import AboutMe from "../comps/AboutMe.js";
import MyWork from "../comps/MyWork.js";
import Test from "../comps/Test.js";
import $ from "jquery";

export default function Home() {
  const scrollToMyWork = () => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#myWork").offset().top - 30,
      },
      1000,
      "swing"
    );
  };
  // const scrollToContact = () => {
  //   $([document.documentElement, document.body]).animate({
  //     scrollTop: $("#contactAbout").offset().top + $("#contactAbout").height()/2
  // }, 1000, 'swing');
  // };

  return (
    <>
      <Head>
        <title>Evan's Portfolio</title>
        <meta
          name="description"
          content="Evan OShea is a fullstack developer in Seattle, WA.He has a background in Photoshop & Design"
        />
      </Head>

      {/* BIG NAV  */}
      <div className={`${classes.bigNav} navbar`}>
        <h1 className={classes.logo}>evanoshea.dev</h1>
        <div className={classes.links}>
          <div onClick={scrollToMyWork} className={classes.link}>
            my work
          </div>
          <div className={classes.link}>
            <Link
              href="mailto:evanoshea21@gmail.com"
              className={classes.contactLink}
            >
              contact
            </Link>
          </div>
          <div className={classes.link}>
            <a
              style={{ textDecoration: "none", fontSize: "1rem" }}
              className={classes2.resume}
              target="_blank"
              href="https://drive.google.com/file/d/1LKyFvoZEEDUOBBkhSjjCA1kbrvJlI3s_/view?usp=sharing"
            >
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* SMALL NAV  */}
      <div className={`${classes.smallNav} navbar`}>
        <h1 className={classes.logo}>evanoshea.dev</h1>
        <div className={classes.links}>
          <div onClick={scrollToMyWork} className={classes.link}>
            my work
          </div>
          <div className={classes.link}>
            <Link href="/contact" className={classes.contactLink}>
              contact
            </Link>
          </div>
        </div>
      </div>

      <Hero />
      <TechScroll />
      {/* <Test /> */}
      <AboutMe />
      <MyWork />
      <div className={classes.gap}>
        &lt; Available for hire.{" "}
        <Link href="mailto:evanoshea21@gmail.com">Contact Now</Link> &gt;
      </div>
    </>
  );
}

import React from "react";
import classes from "@/styles/ContactPage.module.css";
import classes2 from "@/styles/Home.module.css";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Head from "next/head";
import $ from "jquery";

const ContactPage = () => {
  const [loading, setLoading] = React.useState("not sent");

  function submitForm(e) {
    e.preventDefault();
    setLoading("loading");

    let formData = {};
    for (let i = 0; i < e.target.length; i++) {
      formData[e.target[i].name] = e.target[i].value;
    }
    // console.log('formData:', formData);
    emailjs
      .send(
        "service_5fpt7gh",
        "template_b44u4ia",
        formData,
        "AO8Ron2UFft4icr3S"
      )
      .then(
        (response) => {
          setLoading("sent");
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setLoading("error");
          console.log("FAILED...", err);
        }
      );
  }

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
      <div className={`${classes2.bigNav} navbar`}>
        <h1 className={classes2.logo}>
          <Link href="/">evanoshea.dev</Link>
        </h1>
      </div>

      {/* SMALL NAV  */}
      <div className={`${classes2.smallNav} navbar`}>
        <h1 className={classes2.logo}>
          <Link href="/">evanoshea.dev</Link>
        </h1>
      </div>

      {/* Contact Page */}
      <div className={classes.main}>
        <h1 className={classes.header}>Contact</h1>
        {loading === "not sent" && (
          <form className={classes.form} onSubmit={submitForm}>
            <div className={classes.nameEmail}>
              <div className={classes.nameInputs}>
                <label htmlFor="name"></label>
                <input
                  required
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>

              <div className={classes.emailInputs}>
                <label htmlFor="email"></label>
                <input
                  required
                  type="email"
                  name="from_email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <label htmlFor="message"></label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Message"
              rows={10}
            />
            <button className={classes.sendBtn} type="submit">
              Send Message
            </button>
          </form>
        )}
        {loading === "loading" && (
          <div className={classes.status}>
            <h2>Sending email...</h2>
          </div>
        )}
        {loading === "sent" && (
          <div className={classes.status}>
            <h2>Email Sent</h2>
            <p>I will be in contact with you shortly!</p>
            <Link href="/" style={{ marginTop: "20px", color: "var(--navy)" }}>
              Return to Homepage
            </Link>
          </div>
        )}
        {loading === "error" && (
          <div className={classes.status}>
            <h3>
              There was an error sending your email. Please try again later.
            </h3>
          </div>
        )}
      </div>
      <div className={classes2.gap}>&lt; Thanks for Stopping By &gt;</div>
    </>
  );
};

export default ContactPage;

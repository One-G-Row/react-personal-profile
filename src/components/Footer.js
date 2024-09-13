import React from "react";
import { Link } from "react-router-dom";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import mail from "./images/mail.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Link
        to="https://www.linkedin.com/in/faith-kimaru-b49b8094/"
        className="links"
      >
        <img src={linkedin} alt="linkedin" className="icons" />
      </Link>
      <Link to="https://github.com/One-G-Row/" className="links">
        <img src={github} alt="github" className="icons" />
      </Link>
      <a href="mailto:kmac.kimaru93@gmail" className="links">
        <img src={mail} alt="mail" className="icons" />
      </a>
    </div>
  );
}

export default Footer;

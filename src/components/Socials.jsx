import React from "react";
import github from "src/assets/images/github.png";
import linkedIn from "src/assets/images/linkedin.png";
import email from "src/assets/images/email.png";

export default function Socials() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/john-thomas-gray"
        className="social-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>

      <a
        href="https://www.linkedin.com/in/john-thomas-gray/"
        className="social-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedIn} alt="LinkedIn" />
      </a>

      <a href="mailto:johnthomgray@gmail.com" className="social-button">
        <img src={email} alt="Email" />
      </a>
    </div>
  );
}

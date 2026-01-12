import React from "react";

import profileImg from "src/assets/images/portrait-wide.png";
import wadjet from "src/assets/images/wadjet-negative-2.png";
import wadjetTextLogo from "src/assets/images/wadjet-text-logo.png";
import tempBraille from "src/assets/images/wadjet-braille-logo.png";

import Socials from "../components/Socials";
import "src/css/home.css";

export function Home() {
  return (
    <>
      <div className="main-image-container">
        <img
          src={profileImg}
          alt="A grinning, bearded man with green eyes and short brown hair"
          className="profile-img"
        />
      </div>
      <div className="center-title">
        <div className="text-body">
          <div className="text-name">John Gray</div>
          <span className="text-split">|</span>
          <div className="text-title">
            <div>Entrepreneur + Software Engineer</div>
          </div>
        </div>
      </div>
      <div className="bottom-pair">
        <a
          className="pair-one"
          href="https://www.wadjet.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pair-one-swap" aria-label="Out of Sight">
            <img
              className="pair-one-braille"
              src={tempBraille}
              alt="'Wadjet' (written in braille)"
            />
            <img
              className="pair-one-text"
              src={wadjetTextLogo}
              alt="Wadjet logo"
            />
          </div>
          <img className="wadjet" src={wadjet} alt="Wadjet eye logo" />
        </a>
        <a
          className="pair-two"
          href="https://www.youtube.com/watch?v=no_elVGGgW8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            "This is a thousand monkeys working at a thousand typewriters. Soon,
            they'll have written the greatest novel known to man!"
          </span>
          <span className="signature">Mr. Burns</span>
        </a>
      </div>
      <Socials />
    </>
  );
}

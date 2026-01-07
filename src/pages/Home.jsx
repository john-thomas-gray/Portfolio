import React, { useEffect } from "react";

import profileImg from "../../assets/images/portrait-wide.png";
import wadjet from "../../assets/images/wadjet-whitesmoke.png";
import tempBraille from "../../assets/images/braille-wadjet.png";

import Socials from "../components/Socials";

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
      <div className="main-title">
        <div className="text-body">
          <div className="text-name">John Gray</div>
          <span className="text-split">|</span>
          <div className="text-title">Entrepreneur + Software Engineer</div>
        </div>
      </div>
      <div className="main-pair">
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
              alt="'Out of Sight' (written in braille)"
            />
            <span className="pair-one-text">Wadjet</span>
          </div>
          <img className="wadjet" src={wadjet} />
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

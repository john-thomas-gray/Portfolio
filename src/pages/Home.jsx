import React from "react";

import profileImg from "../../assets/images/profile.png";
import wadjet from "../../assets/images/wadjet.png";
import tempBraille from "../../assets/images/tempBraille.png";

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
      <div className="main-name">
        <div className="text-body">
          <span className="text-name">John Gray</span>
          <span className="text-split">|</span>
          <span className="text-title">Entrepreneur + Software Engineer</span>
        </div>
      </div>
      <div className="main-pair">
        <a className="pair-one" href="https://www.wadjet.com">
          <div className="pair-one-swap" aria-label="Out of Sight">
            <img
              className="pair-one-braille"
              src={tempBraille}
              alt="'Out of Sight' (written in braille)"
            />
            <span className="pair-one-text">Out of Sight</span>
          </div>
          <img className="wadjet" src={wadjet} />
        </a>
        <a
          className="pair-two"
          href="https://www.youtube.com/watch?v=no_elVGGgW8"
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

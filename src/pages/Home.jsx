import React from "react";

import profileImg from "../../assets/images/profile.png";
import wadjet from "../../assets/images/wadjet.png";
import tempBraille from "../../assets/images/tempBraille.png";

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
        <div className="pair-one">
          <div className="pair-one-swap" aria-label="Out of Sight">
            <img
              className="pair-one-braille"
              src={tempBraille}
              alt="'Out of Sight' (written in braille)"
            />
            <span className="pair-one-text">Out of Sight</span>
          </div>
          <img className="wadjet" src={wadjet} />
        </div>
        <div className="pair-two"></div>
      </div>
      <div className="social-links">
        <div className="social"></div>
        <div className="social"></div>
        <div className="social"></div>
      </div>
    </>
  );
}

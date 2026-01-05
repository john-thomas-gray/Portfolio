import React from "react";
import "../../css/about.css";
import Socials from "../components/Socials";
import portrait from "../../assets/images/standing.png";
import landscape from "../../assets/images/landscape.png";

export function About() {
  return (
    <>
      <div className="about">
        <div className="content">
          <div className="column-two">
            <div className="image-container">
              {/* <img src={portrait} /> */}
            </div>
          </div>
          <div className="column-one">
            <div className="top">
              <section className="bio">
                <p>
                  Hello there. I’m <strong>John Gray</strong>, an entrepreneur
                  and software engineer. The post production company I founded,{" "}
                  <strong>Out of Sight</strong>, creates boutique audio
                  description so people with visual impairments can enjoy vivid
                  film and television.
                </p>

                <p>
                  In the course of running my business, I programmed tools to
                  automate internal workflows and reduce days of human labor to
                  the press of a button.
                </p>

                <p>
                  Many of my projects are available here, including an app that
                  enables low-vision users to access live screenings and other
                  creative experiments. I also volunteer with{" "}
                  <strong>Change Climate</strong>, building software to drive
                  carbon reduction.
                </p>

                <p>
                  Outside of work, I love writing, reading, cooking, creating
                  games and the San Francisco Giants. Born and live in New York.
                </p>
              </section>
            </div>
          </div>
        </div>
        <Socials />
      </div>
    </>
  );
}

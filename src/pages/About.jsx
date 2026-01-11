import React from "react";
import "../../css/about.css";
import Socials from "../components/Socials";
import portrait from "../../assets/images/beach-photo.jpg";
import landscape from "../../assets/images/landscape.png";

export function About() {
  return (
    <>
      <div className="about-container">
        <section className="about">
          <div className="column-one">
            <div className="top" />
            <div className="middle">
              <section className="bio">
                <p>
                  Hello there. I’m <strong>John Gray</strong>, an entrepreneur
                  and software engineer. The post production company I founded,{" "}
                  <strong>Out of Sight</strong>, creates boutique audio
                  description so people with visual impairments can enjoy vivid
                  film and television.
                </p>

                <p>
                  In the course of running my business, I began programming
                  automation tools to reduce days of menial office work to a
                  single button press. To mitigate other forms of human
                  suffering, I now create humanitarian software, including an
                  app that enables low-vision users to access live film
                  screenings. I also volunteer with{" "}
                  <strong>Change Climate</strong>, building technical solutions
                  which drive carbon reduction.
                </p>

                <p>
                  Outside of work, I love writing, reading, cooking, creating
                  games and the San Francisco Giants. Born and live in New York.
                </p>
              </section>
            </div>
            <div className="bottom" />
          </div>
          <div className="column-two">
            <img className="beach" src={portrait} />
          </div>
          <div className="column-three"></div>
        </section>
        <Socials />
      </div>
    </>
  );
}

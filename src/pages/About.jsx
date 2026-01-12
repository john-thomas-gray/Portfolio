import React, { useLayoutEffect, useRef } from "react";
import "../../css/about.css";
import Socials from "../components/Socials";
import portrait from "../../assets/images/beach-photo.jpg";
import landscape from "../../assets/images/landscape.png";

export function About() {
  const middleRef = useRef(null);
  const bioRef = useRef(null);
  const maxFontPxRef = useRef(null);

  useLayoutEffect(() => {
    const middleEl = middleRef.current;
    const bioEl = bioRef.current;

    if (!middleEl || !bioEl) return;

    const getMaxFontPx = () => {
      if (typeof maxFontPxRef.current === "number") return maxFontPxRef.current;

      bioEl.style.removeProperty("--bio-font-size");
      const sample = bioEl.querySelector("p") || bioEl;
      const computed = window.getComputedStyle(sample);
      const px = parseFloat(computed.fontSize);

      maxFontPxRef.current = Number.isFinite(px) && px > 0 ? px : 24;
      return maxFontPxRef.current;
    };

    const fitBioText = () => {
      const maxPx = getMaxFontPx();
      const minPx = 8;

      const available = middleEl.clientHeight;
      if (!available) return;

      let lo = minPx;
      let hi = maxPx;

      for (let i = 0; i < 12; i += 1) {
        const mid = (lo + hi) / 2;
        bioEl.style.setProperty("--bio-font-size", `${mid}px`);

        const fits = bioEl.scrollHeight <= available + 0.5;
        if (fits) lo = mid;
        else hi = mid;
      }

      bioEl.style.setProperty("--bio-font-size", `${lo}px`);
    };

    const rafFit = () => window.requestAnimationFrame(fitBioText);

    const ro = new ResizeObserver(rafFit);
    ro.observe(middleEl);
    ro.observe(bioEl);
    window.addEventListener("resize", rafFit, { passive: true });

    if (document.fonts?.ready)
      document.fonts.ready.then(rafFit).catch(() => {});

    rafFit();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", rafFit);
    };
  }, []);

  return (
    <>
      <div className="about-container">
        <section className="about">
          <div className="column-one">
            <div className="top" />
            <div className="middle" ref={middleRef}>
              <section className="bio" ref={bioRef}>
                <p>
                  Hello there. I’m <strong>John Gray</strong>, an entrepreneur
                  and software engineer. The post production company I founded,{" "}
                  <strong>Wadjet</strong>, creates boutique audio description so
                  people with visual impairments can enjoy vivid film and
                  television.
                </p>

                <p>
                  In the course of running my business, I began programming
                  automation tools to reduce days of menial office work to a
                  single button press. To mitigate other forms of human
                  suffering, I now create humanitarian software, including an
                  app that enables low-vision users to access live film
                  screenings. I also volunteer with{" "}
                  <strong>Change Climate Project</strong>, building technical
                  solutions that drive carbon reduction.
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

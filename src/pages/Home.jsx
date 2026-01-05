import React, { useEffect } from "react";

import profileImg from "../../assets/images/portrait-wide.png";
import wadjet from "../../assets/images/wadjet-whitesmoke.png";
import tempBraille from "../../assets/images/braille-wadjet.png";

import Socials from "../components/Socials";

export function Home() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const clamp01 = (x) => Math.min(1, Math.max(0, x));
    const MIN_W = 360;
    const MAX_W = 1600;
    const MIN_H = 560;
    const MAX_H = 1200;

    const sync = () => {
      const w = window.innerWidth || MIN_W;
      const h = window.innerHeight || 800;
      const tW = clamp01((w - MIN_W) / (MAX_W - MIN_W)); // 0..1
      const tH = clamp01((h - MIN_H) / (MAX_H - MIN_H)); // 0..1

      /*
        Only rotate/change when the user resizes:
        - rotation is derived from width/height (no time component)
        - hue shift is also derived from size (dull palette keeps it subtle)
      */
      const rot = (tW * 320 + tH * 140) % 360;

      // Keep hue shifts firmly in the "fire" range (reds -> oranges -> golds).
      // ~8° = deep red, ~55° = warm gold.
      const hue = 8 + tW * 32 + tH * 15;

      // Move the highlight based on aspect ratio (no time)
      const x = 50 + (tW - 0.5) * 28;
      const y = 50 + (tH - 0.5) * 20;

      root.style.setProperty("--psy-rot", `${rot.toFixed(1)}deg`);
      root.style.setProperty("--psy-hue", `${hue.toFixed(1)}deg`);
      root.style.setProperty("--psy-x", `${x.toFixed(1)}%`);
      root.style.setProperty("--psy-y", `${y.toFixed(1)}%`);

      // Keep a backing color in sync too (in case blend modes differ by browser)
      root.style.setProperty("--hero-bg", `hsl(${hue.toFixed(1)} 55% 45%)`);
    };

    const onResize = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        sync();
      });
    };

    sync();
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) window.cancelAnimationFrame(raf);
      root.style.removeProperty("--hero-bg");
      root.style.removeProperty("--psy-rot");
      root.style.removeProperty("--psy-hue");
      root.style.removeProperty("--psy-x");
      root.style.removeProperty("--psy-y");
    };
  }, []);

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

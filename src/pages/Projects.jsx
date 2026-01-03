import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Projects.css";
import beecore from "../../assets/images/beecore.png";
import colorChameleon from "../../assets/images/colorchameleon.png";
import conferencego from "../../assets/images/conferencego.png";
import fourDogNightTitle from "../../assets/images/fourDogNightTitle.png";
import sFStreet from "../../assets/images/sFStreet.png";
import profile from "../../assets/images/portfolio.png";

function colorForIndex(i) {
  // Deterministic "random-ish" color per card (stable across reloads)
  const hue = (i * 47) % 360;
  return `hsl(${hue} 85% 65%)`;
}

function ProjectCard({ name, image, href, borderColor, style }) {
  return (
    <a
      className="project-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ borderColor, ...style }}
      aria-label={name}
    >
      <div className="project-card-media">
        {image ? <img className="project-card-img" src={image} alt="" /> : null}
      </div>
      <div className="project-card-name">{name}</div>
    </a>
  );
}

export function Projects() {
  const projects = useMemo(
    () => [
      { name: "Bee Core", image: beecore, href: "https://www.facebook.com" },
      { name: "profile", image: profile, href: "https://www.johngraydev.com" },
      {
        name: "Conference Go",
        image: conferencego,
        href: "https://www.facebook.com",
      },
      {
        name: "Color Chameleon",
        image: colorChameleon,
        href: "https://www.facebook.com",
      },
      {
        name: "Four Dog Night",
        image: fourDogNightTitle,
        href: "https://www.fourdognight.com",
      },
      {
        name: "San Francisco",
        image: sFStreet,
        href: "https://www.sanfrancisco.com",
      },
    ],
    []
  );

  const projectsLoop = useMemo(
    () => [...projects, ...projects, ...projects],
    [projects]
  );

  const [isShortViewport, setIsShortViewport] = useState(false);

  useEffect(() => {
    // Keep this in sync with `Projects.css` media query.
    const GRID_MAX_HEIGHT = "500px";
    const mq = window.matchMedia(`(max-height: ${GRID_MAX_HEIGHT})`);
    const sync = () => setIsShortViewport(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const rowCount = isShortViewport ? 1 : 2;
  const columnCount = Math.ceil(projectsLoop.length / rowCount);

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const segmentWidth = el.scrollWidth / 3;
    el.scrollLeft = segmentWidth;

    const onScroll = () => {
      const seg = el.scrollWidth / 3;

      if (el.scrollLeft < seg * 0.5) el.scrollLeft += seg;
      else if (el.scrollLeft > seg * 1.5) el.scrollLeft -= seg;
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="projects">
      <div
        className="projects-scroller"
        ref={scrollRef}
        aria-label="Projects scroller"
      >
        <div
          className="projects-grid"
          style={{
            gridTemplateColumns: `repeat(${columnCount}, var(--project-card-w))`,
          }}
        >
          {projectsLoop.map((project, renderIdx) => (
            <ProjectCard
              key={renderIdx}
              name={project.name}
              image={project.image}
              href={project.href}
              borderColor={colorForIndex(renderIdx)}
              style={{
                gridColumn: isShortViewport
                  ? renderIdx + 1
                  : Math.floor(renderIdx / 2) + 1,
                gridRow: isShortViewport ? 1 : (renderIdx % 2) + 1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

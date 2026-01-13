import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "src/css/projects.css";
import { PROJECTS } from "../data/projects";

function ProjectCard({ name, image, to, style }) {
  return (
    <Link
      className="project-card"
      to={to}
      style={{ ...style }}
      aria-label={name}
    >
      <div className="project-card-media">
        {image ? <img className="project-card-img" src={image} alt="" /> : null}
      </div>
      <div className="project-card-name">{name}</div>
    </Link>
  );
}

export function Projects() {
  const projects = useMemo(() => PROJECTS, []);

  const projectsLoop = useMemo(
    () => [...projects, ...projects, ...projects],
    [projects]
  );

  const [isShortViewport, setIsShortViewport] = useState(false);

  useEffect(() => {
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

    const onWheel = (event) => {
      if (event.ctrlKey) return;

      if (!event.deltaY) return;

      if (el.scrollWidth <= el.clientWidth) return;

      el.scrollLeft += event.deltaY + (event.deltaX || 0);
      event.preventDefault();
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
    };
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
              name={project.title}
              image={project.cardImage}
              to={`/projects/${project.slug}`}
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

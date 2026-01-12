import React, { useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import "../../css/project-detail.css";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const descriptionWrapRef = useRef(null);
  const descriptionTextRef = useRef(null);

  if (!project) return <Navigate to="/404" replace />;

  useEffect(() => {
    const wrap = descriptionWrapRef.current;
    const p = descriptionTextRef.current;
    if (!wrap || !p) return;

    const fit = () => {
      p.style.removeProperty("font-size");

      const computed = window.getComputedStyle(p);
      const maxFont = Number.parseFloat(computed.fontSize) || 23;
      const minFont = 12;

      const wrapHeight = wrap.clientHeight;
      if (!wrapHeight) return;

      const marginTop = Number.parseFloat(computed.marginTop) || 0;
      const marginBottom = Number.parseFloat(computed.marginBottom) || 0;
      const available = Math.max(0, wrapHeight - marginTop - marginBottom);

      const currentHeight = p.getBoundingClientRect().height;
      if (currentHeight <= available) return;

      let lo = minFont;
      let hi = maxFont;

      for (let i = 0; i < 12; i++) {
        const mid = (lo + hi) / 2;
        p.style.fontSize = `${mid}px`;

        const h = p.getBoundingClientRect().height;
        if (h > available) hi = mid;
        else lo = mid;
      }

      p.style.fontSize = `${lo}px`;
    };

    fit();
    const ro = new ResizeObserver(() => fit());
    ro.observe(wrap);
    window.addEventListener("resize", fit);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [project.description]);

  return (
    <section className="project-detail" aria-label={`${project.title} details`}>
      <div className="title">
        <div className="title-left">
          <h1 className="project-detail-title">{project.title}</h1>
        </div>
        <div className="title-right"></div>
      </div>
      <div className="visual">
        <div className="visual-left"></div>
        <div className="visual-center">
          {project.videoEmbedUrl ? (
            <iframe
              className="visual-media visual-media-video"
              src={project.videoEmbedUrl}
              title={`${project.title} video`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : project.cardImage ? (
            <img
              className="visual-media "
              src={project.cardImage}
              alt={project.title}
            />
          ) : null}
        </div>
        <div className="visual-right"></div>
      </div>
      <div className="description">
        <div className="description-left"></div>
        <div className="description-right" ref={descriptionWrapRef}>
          <p ref={descriptionTextRef}>{project.description}</p>
        </div>
      </div>
    </section>
  );
}

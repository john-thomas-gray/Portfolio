import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import "../../css/project-detail.css";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/404" replace />;

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
              className="visual-media"
              src={project.videoEmbedUrl}
              title={`${project.title} video`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : project.cardImage ? (
            <img
              className="visual-media"
              src={project.cardImage}
              alt={project.title}
            />
          ) : null}
        </div>
        <div className="visual-right"></div>
      </div>
      <div className="description">
        <div className="description-left"></div>
        <div className="description-right">
          <p>{project.description}</p>
        </div>
      </div>
    </section>
  );
}

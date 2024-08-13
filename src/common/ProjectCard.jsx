import React from "react";

function ProjectCard({ src, link, h3, p, rick }) {
  return (
    <a href={link} target="_blank">
      <img className={`hover ${rick}`} src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;

import React from 'react';

function ProjectCard({ title, imageSrc }) {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">{title}</div>
        <img src={`https://www.w3schools.com/w3images/${imageSrc}`} alt="House" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default ProjectCard;

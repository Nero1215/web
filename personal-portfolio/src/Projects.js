import React from 'react';
import project1 from './assets/2.png'; 
import project2 from './assets/3.png';
import project3 from './assets/4.png';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="project">
        <img src={project1} alt="Project 1" />
        <p>Project 1： a simple design for intenet</p>
      </div>
      <div className="project">
        <img src={project2} alt="Project 2" />
        <p>Project 2:a simple web design </p>
      </div>
      <div className="project">
        <img src={project3} alt="Project 3" />
        <p>Project 3: a simple address desgin</p>
      </div>
    </div>
  );
}

export default Projects;


import React from 'react';
import image from './assets/1.jpeg';
import './AboutMe.css';

const resume = './assets/profile.pdf';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src={image} alt="Profile" className="profile-image" />
      <div className="text-content">
        <h1>About Me</h1>
        <p>Hi, I'm Ruisheng Wang, a web developer with experience in React. And I already learned C# and HTML.</p>
      </div>
      <a href={resume} target="_blank" rel="noopener noreferrer" className="download-link">Download</a>
    </div>
  );
};

export default AboutMe;

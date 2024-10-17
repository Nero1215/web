import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Personal Portfolio</h1>
      <p>What I have learn:</p>
      <p>1 year c# experience</p>
      <p>half year javascript</p>
      <p>half year HTML</p>
      <Link to="/about">Learn More About Me</Link>
    </div>
  );
}

export default Home;

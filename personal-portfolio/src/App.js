import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import './App.css';
import fazeLogo from './assets/faze.jpg';  

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <img src={fazeLogo} alt="Faze Logo" className="logo" />  {/* Displaying the logo */}
          <ul>
            <li><Link to="/">Home</Link></li>  {/* Link to Home page */}
            <li><Link to="/about">About Me</Link></li>  {/* Link to About Me page */}
            <li><Link to="/projects">Projects</Link></li>  {/* Link to Projects page */}
            <li><Link to="/services">Services</Link></li>  {/* Link to Services page */}
            <li><Link to="/contact">Contact</Link></li>  {/* Link to Contact page */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />  {/* Route for Home page */}
          <Route path="/about" element={<AboutMe />} />  {/* Route for About Me page */}
          <Route path="/projects" element={<Projects />} />  {/* Route for Projects page */}
          <Route path="/services" element={<Services />} />  {/* Route for Services page */}
          <Route path="/contact" element={<Contact />} />  {/* Route for Contact page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

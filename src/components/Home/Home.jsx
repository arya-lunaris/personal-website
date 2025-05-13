import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/projects');
  };

  return (
    <section id="home">
      <div className="profile-section">
        <img
          src="https://imgur.com/4YSGf5h.png"
          alt="Profile"
          className="profile-image"
        />
        <h1 className="header">Arya Ram</h1>
        <h2>Welcome</h2>
        <p>I'm a junior developer with a passion for building clean and user-friendly websites.</p>
      </div>

      <hr className="profile-divider" /> 

      <div className="featured-projects">
        <h3 onClick={handleNavigate} style={{ cursor: 'pointer' }}>
          Featured Projects
        </h3>
        <div className="project-gallery">
          <a href="https://psquest.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/rHGJUW1.png" alt="PSQuest" />
          </a>
          <a href="https://app-toonder.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/XJc2So8.png" alt="Toonder" />
          </a>
          <a href="https://stranger-tales.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/y4os3JF.png" alt="Scary Stories App" />
          </a>
          <a href="https://arya-lunaris.github.io/game-project-wordle/" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/IQOoqH9.png" alt="Wordle Clone" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
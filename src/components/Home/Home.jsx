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
      <div className="profile-content">
        <div className="profile-text">
          <p>Hello World, my name is</p>
          <h1 className="header">Arya Ram</h1>
          <p>I'm a junior developer.</p>
        </div>
        <div className="profile-image-wrapper">
          <img
            src="https://imgur.com/Riq1caz.png"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="profile-text-right">
          <p>Full stack developer who loves building things on the web, check out my portfolio below.</p>
        </div>
      </div>

      <hr className="profile-divider" /> 

      <div className="projects-container">
        <div className="featured-projects">
          <h3>Featured Projects</h3>
          <div className="project-gallery">
            <div className="project-card">
              <a href="https://psquest.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://imgur.com/rHGJUW1.png" alt="PSQuest" />
                <p className="project-title">PSQuest</p>
              </a>
            </div>
            <div className="project-card">
              <a href="https://app-toonder.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://imgur.com/XJc2So8.png" alt="Toonder" />
                <p className="project-title">Toonder</p>
              </a>
            </div>
            <div className="project-card">
              <a href="https://stranger-tales.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://imgur.com/y4os3JF.png" alt="Stranger Tales" />
                <p className="project-title">Stranger Tales</p>
              </a>
            </div>
            <div className="project-card">
              <a href="https://arya-lunaris.github.io/game-project-wordle/" target="_blank" rel="noopener noreferrer">
                <img src="https://imgur.com/IQOoqH9.png" alt="Wordle" />
                <p className="project-title">Wordle</p>
              </a>
            </div>
          </div>
          <button onClick={handleNavigate} className="view-more-projects-button">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
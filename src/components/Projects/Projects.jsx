import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">All Projects</h2>
      <div className="project-list">

        <div className="project">
          <h3 className="project-title">PSQuest</h3>
          <a href="https://psquest.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/rHGJUW1.png" alt="PSQuest" className="project-image" />
          </a>
          <p className="project-description">A solo full-stack application for PlayStation gamers to search, track, and manage their game collection and wishlist.</p>
          <p className="project-details">Built with a React frontend and Django REST Framework backend with full CRUD functionality and user authentication.</p>
          <p>
            <a href="https://github.com/arya-lunaris/PSQuest-client" target="_blank" rel="noopener noreferrer" className="project-link">Frontend GitHub</a> |{' '}
            <a href="https://github.com/arya-lunaris/PSQuest-api" target="_blank" rel="noopener noreferrer" className="project-link">Backend GitHub</a>
          </p>
        </div>

        <div className="project">
          <h3 className="project-title">Toonder</h3>
          <a href="https://app-toonder.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/XJc2So8.png" alt="Toonder" className="project-image" />
          </a>
          <p className="project-description">Group project: a Tinder-style matching app where cartoon characters are matched based on preferences.</p>
          <p className="project-details">Built with a React frontend and Node.js/Express backend, integrating RESTful APIs and using Agile team collaboration practices.</p>
          <p>
            <a href="https://github.com/arya-lunaris/toonder-client" target="_blank" rel="noopener noreferrer" className="project-link">Frontend GitHub</a> |{' '}
            <a href="https://github.com/arya-lunaris/toonder-api" target="_blank" rel="noopener noreferrer" className="project-link">Backend GitHub</a>
          </p>
        </div>

        <div className="project">
          <h3 className="project-title">Stranger Tales</h3>
          <a href="https://stranger-tales.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/y4os3JF.png" alt="Scary Stories App" className="project-image" />
          </a>
          <p className="project-description">A full-stack horror story platform where users can write, post, comment on, and rate creepy tales.</p>
          <p className="project-details">Created using HTML, CSS, JavaScript, Node.js, and Express. Implemented full CRUD operations, comment functionality, and server-side routing.</p>
          <p>
            <a href="https://github.com/arya-lunaris/scarystories-app" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
          </p>
        </div>

        <div className="project">
          <h3 className="project-title">Wordle</h3>
          <a href="https://arya-lunaris.github.io/game-project-wordle/" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/IQOoqH9.png" alt="Wordle Clone" className="project-image" />
          </a>
          <p className="project-description">Recreated the popular Wordle game using just HTML and CSS to closely match the original gameplay and UI design.</p>
          <p className="project-details">Focused on replicating game logic, responsive styling, and interactive feedback.</p>
          <p>
            <a href="https://github.com/arya-lunaris/game-project-wordle" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
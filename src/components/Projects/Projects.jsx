import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="project-list">

        <div className="project">
          <h3 className="project-title">PSQuest</h3>
          <p className="project-description">A solo full-stack application for PlayStation gamers to search, track, and manage their game collection and wishlist.</p>
          <p className="project-details">Built with a React frontend and Django REST Framework backend with full CRUD functionality and user authentication.</p>
          <p>
            <a href="https://github.com/arya-lunaris/PSQuest-client.git" target="_blank" rel="noopener noreferrer" className="project-link">Frontend GitHub</a> | 
            <a href="https://github.com/arya-lunaris/PSQuest-api.git" target="_blank" rel="noopener noreferrer" className="project-link"> Backend GitHub</a>
          </p>
        </div>

        <div className="project">
          <h3 className="project-title">Toonder</h3>
          <p className="project-description">Group project: a Tinder-style matching app where cartoon characters are matched based on preferences.</p>
          <p className="project-details">Built with a React frontend and Node.js/Express backend, integrating RESTful APIs and using Agile team collaboration practices.</p>
          <p>
            <a href="https://github.com/arya-lunaris/toonder-client.git" target="_blank" rel="noopener noreferrer" className="project-link">Frontend GitHub</a> | 
            <a href="https://github.com/arya-lunaris/toonder-api.git" target="_blank" rel="noopener noreferrer" className="project-link"> Backend GitHub</a>
          </p>
        </div>

        <div className="project">
          <h3 className="project-title">Scary Stories App</h3>
          <p className="project-description">A full-stack horror story platform where users can write, post, comment on, and rate creepy tales.</p>
          <p className="project-details">Created using HTML, CSS, JavaScript, Node.js, and Express. Implemented full CRUD operations, comment functionality, and server-side routing.</p>
          <p>
            <a href="https://github.com/arya-lunaris/scarystories-app.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
          </p>
        </div>

        <div className="project">
          <h3 className="project-title">Wordle Clone</h3>
          <p className="project-description">Recreated the popular Wordle game using just HTML and CSS to closely match the original gameplay and UI design.</p>
          <p className="project-details">Focused on replicating game logic, responsive styling, and interactive feedback.</p>
          <p>
            <a href="https://github.com/arya-lunaris/game-project-wordle.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">

        <div className="project">
          <h3>PSQuest</h3>
          <p>A solo full-stack application for PlayStation gamers to search, track, and manage their game collection and wishlist.</p>
          <p>Built with a React frontend and Django REST Framework backend with full CRUD functionality and user authentication.</p>
          <p>
            <a href="https://github.com/yourusername/psquest-frontend" target="_blank" rel="noopener noreferrer">Frontend GitHub</a> | 
            <a href="https://github.com/yourusername/psquest-backend" target="_blank" rel="noopener noreferrer"> Backend GitHub</a>
          </p>
        </div>

        <div className="project">
          <h3>Toonder</h3>
          <p>Group project: a Tinder-style matching app where cartoon characters are matched based on preferences.</p>
          <p>Built with a React frontend and Node.js/Express backend, integrating RESTful APIs and using Agile team collaboration practices.</p>
          <p>
            <a href="https://github.com/yourusername/toonder-frontend" target="_blank" rel="noopener noreferrer">Frontend GitHub</a> | 
            <a href="https://github.com/yourusername/toonder-backend" target="_blank" rel="noopener noreferrer"> Backend GitHub</a>
          </p>
        </div>

        <div className="project">
          <h3>Scary Stories App</h3>
          <p>A full-stack horror story platform where users can write, post, comment on, and rate creepy tales.</p>
          <p>Created using HTML, CSS, JavaScript, Node.js, and Express. Implemented full CRUD operations, comment functionality, and server-side routing.</p>
          <p>
            <a href="https://github.com/yourusername/scary-stories-app" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>

        <div className="project">
          <h3>Wordle Clone</h3>
          <p>Recreated the popular Wordle game using just HTML and CSS to closely match the original gameplay and UI design.</p>
          <p>Focused on replicating game logic, responsive styling, and interactive feedback.</p>
          <p>
            <a href="https://github.com/yourusername/wordle-clone" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
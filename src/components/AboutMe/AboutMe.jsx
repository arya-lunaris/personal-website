import React from 'react';
import './AboutMe.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I come from a background in healthcare, where I developed a strong sense of empathy, attention to detail, and a problem-solving mindset. While I found that work meaningful, I’ve always had a deep interest in technology. That passion led me to complete an intensive software engineering bootcamp at General Assembly, where I gained hands-on experience with modern web development tools and practices. I’m especially drawn to front-end design and have a keen eye for creating visually engaging, user-friendly experiences. Looking ahead, I’m excited by the possibility of working in tech and hope to eventually contribute to the gaming industry as well.
      </p>
      <div className="about-languages">
        <h3 className="languages-title">Languages &amp; Tools</h3>
        <ul className="languages-list">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Python</li>
          <li>Django</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Git</li>
          <li>VS Code</li>
        </ul>
      </div>
    </section>
  );
};

export default About;

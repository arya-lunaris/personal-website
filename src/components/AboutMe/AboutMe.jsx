import React from 'react';
import './AboutMe.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
      Coming from backgrounds in healthcare and fashion, I developed a strong sense of empathy, an eye for design, and a natural problem-solving mindset. But I’ve always had a deep affinity for the internet, technology, and gaming — you could say I’m a bit of a nerd at heart. I decided to finally pursue that passion and made a bold career pivot, graduating from General Assembly’s Software Engineering bootcamp in 2025. There, I gained hands-on experience with modern web development tools and practices. I’m especially drawn to front-end development, where I can combine my creative instincts with technical skills to build clean, user-friendly experiences. I’m excited to explore the vast opportunities in tech, and one day, I hope to find a place in the gaming industry.
      </p>
      <div className="about-languages">
        <h3 className="languages-title">Languages &amp; Tools</h3>
        <ul className="languages-list">
          <li><img src="https://imgur.com/oPy4OtF.png" alt="JavaScript" />JavaScript</li>
          <li><img src="https://imgur.com/tuwJT6J.png" alt="HTML" />HTML</li>
          <li><img src="https://imgur.com/mTf9551.png" alt="CSS" />CSS</li>
          <li><img src="https://imgur.com/TyppCpz.png" alt="React" />React</li>
          <li><img src="https://imgur.com/WwwosDJ.png" alt="Node.js" />Node.js</li>
          <li><img src="https://imgur.com/0a8UYNH.png" alt="Express" />Express</li>
          <li><img src="https://imgur.com/NTFcpSv.png" alt="Python" />Python</li>
          <li><img src="https://imgur.com/GS8n25V.png" alt="Django" />Django</li>
          <li><img src="https://imgur.com/dsBsHeC.png" alt="MongoDB" />MongoDB</li>
          <li><img src="https://imgur.com/oyqrAEC.png" alt="PostgreSQL" />PostgreSQL</li>
          <li><img src="https://imgur.com/97m20hj.png" alt="Git" />Git</li>
          <li><img src="https://imgur.com/c6YYrff.png" alt="VS Code" />VS Code</li>
        </ul>
      </div>
    </section>
  );
};

export default About;

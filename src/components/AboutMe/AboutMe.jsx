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

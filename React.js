import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/project1.jpg',
      link: 'https://project1.com'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of project 2',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      image: '/project2.jpg',
      link: 'https://project2.com'
    }
  ];

  // Add state for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form submission (you can integrate with an API like EmailJS or backend)
    alert(`Message sent: ${JSON.stringify(formData)}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="portfolio">
      <section className="hero">
        <h1>Your Name</h1>
        <p>Full Stack Developer</p>
      </section>

      <section className="projects">
        <h2>My Work</h2>
        <div className="project-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a passionate full-stack developer with experience in building web applications.
          I love creating efficient, user-friendly solutions using modern technologies.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
import { useState } from "react";
import "./styles.css";

function App() {
  const [lightMode, setLightMode] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Python",
    "SQL",
    "Git & GitHub",
    "Tailwind CSS",
    "Responsive Design",
    "Software Testing",
    "Test Cases",
    "Bug Reporting",
    "Data Analysis",
  ];

  const projects = [
    {
      number: "01",
      title: "React Image Search",
      description:
        "A responsive image search application built with React and the Unsplash API, featuring search functionality, loading states, and error handling.",
      technologies: ["React.js", "JavaScript", "CSS", "Unsplash API"],
      link: "https://inspiring-swan-3b0f59.netlify.app/",
    },
    {
      number: "02",
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce interface designed to present products clearly and provide a simple, user-friendly browsing experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/monika2174/shopeasy-ecommerce",
    },
    {
      number: "03",
      title: "Travel Booking Platform",
      description:
        "A travel booking project focused on organizing travel information and creating a simple, user-friendly booking experience.",
      technologies: ["React.js", "Python", "FastAPI", "MySQL"],
      link: "",
    },
    {
      number: "04",
      title: "Campus Ride",
      description:
        "A campus transportation platform designed to make student travel easier by connecting passengers and drivers through a web-based system.",
      technologies: ["React.js", "Node.js", "WebSockets"],
      link: "https://github.com/monika2174/Campus-Ride-1",
    },
  ];

  const internships = [
    {
      number: "01",
      company: "Bist Technologies",
      description:
        "Internship experience that provided practical exposure to professional development and real-world technology practices.",
      file: "/certificates/Bist_Technologies.pdf",
    },
    {
      number: "02",
      company: "SkillDzire",
      description:
        "Internship experience focused on developing practical technical skills and gaining exposure to industry-oriented work.",
      file: "/certificates/Borra_Monika_certificate.pdf",
    },
  ];

  const certificates = [
    {
      number: "01",
      title: "Augmented Reality & Virtual Reality Workshop",
      organization: "Bapatla Engineering College",
      file: "/certificates/Y22AIT414.pdf",
    },
    {
      number: "02",
      title: "Artificial Intelligence Fundamentals",
      organization: "Artificial Intelligence Fundamentals",
      file:
        "/certificates/ArtificialIntelligenceFundamentals_Badge20241024-7-lejuim.pdf",
    },
  ];

  return (
    <div className={`portfolio ${lightMode ? "light-mode" : ""}`}>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" aria-label="Monika Borra home">
          M<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#internships">Internships</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setLightMode(!lightMode)}
          type="button"
          aria-label={
            lightMode ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          {lightMode ? "☾ Dark Mode" : "☀ Light Mode"}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              HELLO, I'M MONIKA
            </div>

            <h1>
              Hi, I'm <span className="gradient-text">Monika Borra</span>
            </h1>

            <h2>Web Developer & Technology Enthusiast</h2>

            <p className="hero-description">
              I build responsive web applications and enjoy turning ideas
              into simple, useful digital experiences. I am passionate about
              learning modern technologies, solving problems, and continuously
              improving my development skills.
            </p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                View My Projects <span>↗</span>
              </a>

              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>

              <a
                className="button button-secondary"
                href="/monika_resume.pdf"
                download="Monika_Borra_Resume.pdf"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/monika2174"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a href="#contact">LinkedIn ↗</a>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="hero-visual">
            <div className="photo-glow"></div>

            <div className="profile-card">
              <div className="card-top">
                <span className="card-label">MY PROFILE</span>
                <span className="card-status">● Available</span>
              </div>

              <div className="profile-photo-wrapper">
                <img
                  src="/monika photo imp.jpeg"
                  alt="Monika Borra"
                  className="profile-image"
                />
              </div>

              <h3>Information Technology</h3>

              <p className="profile-role">
                Bapatla Engineering College
              </p>

              <div className="profile-divider"></div>

              <div className="profile-info">
                <div>
                  <span className="info-icon">⌘</span>

                  <div>
                    <small>CGPA</small>
                    <p>7.28/10</p>
                  </div>
                </div>

                <div>
                  <span className="info-icon">✦</span>

                  <div>
                    <small>PROJECTS</small>
                    <p>4</p>
                  </div>
                </div>

                <div>
                  <span className="info-icon">↗</span>

                  <div>
                    <small>FOCUS</small>
                    <p>Web Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-strip">
          <div>
            <strong>04</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>13</strong>
            <span>Technical Skills</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Internships</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Certificates</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>

            <h2>
              About <span className="gradient-text">Me</span>
            </h2>

            <p>A little about my interests and what I enjoy building.</p>
          </div>

          <div className="about-card">
            <div className="about-symbol">{"< />"}</div>

            <div>
              <h3>Curious Mind. Creative Builder.</h3>

              <p>
                I'm Monika Borra, a technology enthusiast with an interest in
                web development and software engineering. I enjoy building
                projects, exploring new technologies, and strengthening my
                coding skills through hands-on practice. I am looking forward
                to contributing to meaningful projects while growing as a
                developer.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>

            <h2>
              Skills & <span className="gradient-text">Technologies</span>
            </h2>

            <p>
              Technologies and tools I have learned and practiced through
              projects and hands-on experience.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{skill}</span>

                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>

            <h2>
              Featured <span className="gradient-text">Projects</span>
            </h2>

            <p>
              A selection of projects that demonstrate my development skills
              and practical learning.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">↗</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <span>↗</span>
                  </a>
                ) : (
                  <span className="project-link project-coming-soon">
                    Project Details
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* INTERNSHIPS */}
        <section className="section" id="internships">
          <div className="section-heading">
            <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>

            <h2>
              My <span className="gradient-text">Internships</span>
            </h2>

            <p>
              Internship experiences that helped me develop practical skills
              and gain exposure to professional work environments.
            </p>
          </div>

          <div className="internships-grid">
            {internships.map((internship) => (
              <article
                className="internship-card"
                key={internship.company}
              >
                <div className="internship-number">
                  {internship.number}
                </div>

                <div className="internship-content">
                  <h3>{internship.company}</h3>

                  <p>{internship.description}</p>

                  <a
                    href={internship.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Internship Certificate ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section className="section" id="certifications">
          <div className="section-heading">
            <p className="eyebrow">ACHIEVEMENTS</p>

            <h2>
              My <span className="gradient-text">Certificates</span>
            </h2>

            <p>
              Workshops and technical certifications that support my
              continuous learning.
            </p>
          </div>

          <div className="internships-grid">
            {certificates.map((certificate) => (
              <article
                className="internship-card"
                key={certificate.file}
              >
                <div className="internship-number">
                  {certificate.number}
                </div>

                <div className="internship-content">
                  <h3>{certificate.title}</h3>

                  <p>{certificate.organization}</p>

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Certificate ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <h2>
              Let's Work <span className="gradient-text">Together</span>
            </h2>

            <p>
              I'm open to opportunities where I can learn, collaborate, and
              contribute to real-world projects. Feel free to get in touch.
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:monikaborra2174@gmail.com"
                className="button button-primary"
              >
                Email Me ↗
              </a>

              <a
                href="mailto:monikaborra2174@gmail.com?subject=Portfolio%20Opportunity"
                className="button button-secondary"
              >
                Get In Touch ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Monika Borra. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
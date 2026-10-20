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
        "A responsive image search application built with React and the Unsplash API, including search functionality, loading states, and error handling.",
      technologies: ["React.js", "JavaScript", "CSS", "Unsplash API"],
      link: "https://inspiring-swan-3b0f59.netlify.app/",
    },

    {
      number: "02",
      title: "E-Commerce Website",
      description:
        "A user-friendly e-commerce website interface designed to present products clearly and provide a smooth browsing experience.",
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
        "A campus ride management platform designed to make transportation easier for students by connecting passengers and drivers.",
      technologies: ["React.js", "Node.js", "Backend", "WebSockets"],
      link: "https://github.com/monika2174/Campus-Ride-1",
    },
  ];

  // INTERNSHIPS
  const internships = [
    {
      company: "Bist Technologies",
      file: "/certificates/Bist_Technologies.pdf",
    },

    {
      company: "SkillDzire",
      file: "/certificates/Borra_Monika_certificate.pdf",
    },
  ];

  // CERTIFICATES
  const certificates = [
    {
      title: "Augmented Reality & Virtual Reality Workshop",
      organization: "Bapatla Engineering College",
      file: "/certificates/Y22AIT414.pdf",
    },

    {
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
        <a href="#home" className="logo">
          M<span>.</span>
        </a>

        <nav className="nav-links">
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
              HI I AM MONIKA..
            </div>

            

            <h1>
              Hi, I'm <span className="gradient-text">Monika Borra</span>
            </h1>

            <h2>Web Developer & Technology Enthusiast</h2>

            <p className="hero-description">
              I am passionate about building responsive web applications and
              creating simple, useful digital experiences. I enjoy learning
              new technologies, solving problems, and turning ideas into
              working projects.
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
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
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
                  src="/monika photo imp.jpg"
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
                    <p>4+</p>
                  </div>
                </div>

                <div>
                  <span className="info-icon">↗</span>

                  <div>
                    <small>FOCUS</small>
                    <p>Software & Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-strip">
          <div>
            <strong>04+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>13+</strong>
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

            <p>
              A little about my interests and what I enjoy building.
            </p>
          </div>

          <div className="about-card">
            <div className="about-symbol">{"< />"}</div>

            <div>
              <h3>Curious Mind. Creative Builder.</h3>

              <p>
                I'm Monika Borra, a technology enthusiast interested in web
                development and software engineering. I enjoy developing
                projects, exploring new tools, and improving my coding skills
                through hands-on practice. My goal is to contribute to
                meaningful projects while continuing to grow as a developer.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>

            <h2>
              Skills &{" "}
              <span className="gradient-text">Technologies</span>
            </h2>

            <p>Tools and technologies I have learned and practiced.</p>
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

            <p>A selection of projects I have worked on.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

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
                    rel="noreferrer"
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
              Internship experiences that helped me gain practical
              knowledge and industry exposure.
            </p>
          </div>

          <div className="internships-grid">
            {internships.map((internship, index) => (
              <article
                className="internship-card"
                key={internship.company}
              >
                <div className="internship-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="internship-content">
                  <h3>{internship.company}</h3>

                  <a
                    href={internship.file}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Certificate ↗
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
              Workshops, courses and technical certifications I have
              completed.
            </p>
          </div>

          <div className="internships-grid">
            {certificates.map((certificate, index) => (
              <article
                className="internship-card"
                key={certificate.file}
              >
                <div className="internship-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="internship-content">
                  <h3>{certificate.title}</h3>

                  <p>{certificate.organization}</p>

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
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
              Let's Work{" "}
              <span className="gradient-text">Together</span>
            </h2>

            <p>
              I'm interested in opportunities to learn, collaborate, and
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
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p><p>© 2026 Monika Borra. All rights reserved.</p></p>

        
      </footer>
    </div>
  );
}

export default App;
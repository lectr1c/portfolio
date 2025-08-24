import "../Styles/About.scss";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know the person behind the code</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p>
                I'm a passionate <strong>Software Engineer</strong> with expertise in both frontend and backend development. 
                With experience across multiple programming languages and frameworks, I specialize in building 
                scalable, efficient, and user-focused applications.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <h3>🚀 What I Do</h3>
                <p>
                  I develop full-stack applications using modern technologies like React, Next.js, Node.js, 
                  Java, and cloud platforms. From responsive front-end interfaces to robust backend APIs, 
                  I handle the complete software development lifecycle.
                </p>
              </div>

              <div className="detail-item">
                <h3>💡 My Approach</h3>
                <p>
                  I believe in writing clean, maintainable code and following best practices. 
                  Performance optimization, security, and user experience are always top priorities 
                  in my development process.
                </p>
              </div>

              <div className="detail-item">
                <h3>🎯 Always Learning</h3>
                <p>
                  The tech world evolves rapidly, and I stay current with the latest trends and technologies. 
                  Whether it's exploring new frameworks, contributing to open source, or solving complex 
                  algorithmic challenges, I'm always expanding my skill set.
                </p>
              </div>
            </div>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">3+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">10+</span>
                <span className="highlight-label">Technologies</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">20+</span>
                <span className="highlight-label">Projects Built</span>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image-container">
                <div className="profile-image">
                  <div className="image-placeholder">
                    <span>👨‍💻</span>
                  </div>
                </div>
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available for work</span>
                </div>
              </div>
              
              <div className="profile-info">
                <h3>Razzaq</h3>
                <p>Software Engineer</p>
                <div className="profile-tags">
                  <span className="tag">Full-Stack</span>
                  <span className="tag">Problem Solver</span>
                  <span className="tag">Team Player</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
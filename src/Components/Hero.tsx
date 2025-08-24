import { useEffect, useRef, useState } from "react";
import "../Styles/Hero.scss";
import { BsCloudDownloadFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  const technologies = [
    "React & Next.js",
    "Node.js & Java",
    "Cloud Solutions",
    "Full-Stack Development"
  ];

  const [currentTech, setCurrentTech] = useState(0);
  const techRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % technologies.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-intro">
              <span className="greeting">Hi, I'm</span>
              <h1 className="hero-name">
                <span className="text-gradient">Razzaq</span>
              </h1>
              <h2 className="hero-title">Software Engineer</h2>
            </div>
            
            <div className="hero-description">
              <p>
                Specializing in{" "}
                <span 
                  key={currentTech}
                  ref={techRef}
                  className="tech-highlight animate-in"
                >
                  {technologies[currentTech]}
                </span>
              </p>
              <p className="hero-subtitle">
                Building modern, scalable applications with cutting-edge technologies.
                Passionate about clean code, performance optimization, and user experience.
              </p>
            </div>

            <div className="hero-actions">
              <a href="/RazzaqCV2025.pdf" download className="btn-primary">
                <BsCloudDownloadFill />
                Download CV
              </a>
              <button onClick={scrollToProjects} className="btn-secondary">
                View Projects
                <HiArrowRight />
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="code-snippet">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="code-title">portfolio.ts</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-variable">developer</span>{" "}
                    <span className="code-operator">=</span>{" "}
                    <span className="code-bracket">&#123;</span>
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-property">name</span>
                    <span className="code-colon">:</span>{" "}
                    <span className="code-string">"Razzaq"</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-property">role</span>
                    <span className="code-colon">:</span>{" "}
                    <span className="code-string">"Software Engineer"</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-property">skills</span>
                    <span className="code-colon">:</span>{" "}
                    <span className="code-bracket">[</span>
                  </div>
                  <div className="code-line code-double-indent">
                    <span className="code-string">"React"</span>
                    <span className="code-comma">,</span>{" "}
                    <span className="code-string">"Node.js"</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="code-line code-double-indent">
                    <span className="code-string">"Java"</span>
                    <span className="code-comma">,</span>{" "}
                    <span className="code-string">"AWS"</span>
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-bracket">]</span>
                  </div>
                  <div className="code-line">
                    <span className="code-bracket">&#125;</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-icon react">⚛️</div>
              <div className="floating-icon node">📦</div>
              <div className="floating-icon java">☕</div>
              <div className="floating-icon cloud">☁️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

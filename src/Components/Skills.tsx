import "../Styles/Skills.scss";

interface Skill {
  name: string;
  category: string;
  icon: string;
  delay: number;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", delay: 0 },
  { name: "Next.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", delay: 0.5 },
  { name: "TypeScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", delay: 1 },
  { name: "JavaScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", delay: 1.5 },
  { name: "HTML5", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", delay: 2 },
  { name: "CSS3", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", delay: 2.5 },
  { name: "SCSS", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg", delay: 3 },

  // Backend
  { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", delay: 0.2 },
  { name: "Java", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", delay: 0.8 },
  { name: "Scala", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg", delay: 1.3 },
  { name: "Python", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", delay: 1.8 },
  { name: "C#", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", delay: 2.3 },
  { name: ".NET", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", delay: 2.8 },

  // Database
  { name: "PostgreSQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", delay: 0.4 },
  { name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", delay: 1.2 },
  { name: "MongoDB", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", delay: 2.1 },

  // Cloud & Tools
  { name: "AWS", category: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", delay: 0.6 },
  { name: "Docker", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", delay: 0.9 },
  { name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", delay: 1.4 },
  { name: "Linux", category: "Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", delay: 1.9 },
];

export default function Skills() {
  const categories = [...new Set(skills.map(skill => skill.category))];

  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>The tools and technologies I work with</p>
        </div>

        <div className="skills-container">
          {categories.map(category => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="floating-skills">
                {getSkillsByCategory(category).map((skill, index) => {
                  const categorySkills = getSkillsByCategory(category);
                  const angle = (360 / categorySkills.length) * index;
                  return (
                    <div 
                      key={skill.name} 
                      className={`orbiting-skill skill-${index}`}
                      style={{
                        animationDelay: `${index * -2}s`,
                        transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`,
                        '--initial-angle': `${angle}deg`
                      } as React.CSSProperties}
                      title={skill.name}
                    >
                      <div className="skill-icon">
                        <img src={skill.icon} alt={skill.name} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <div className="summary-icon">🔧</div>
            <h4>Full-Stack Development</h4>
            <p>End-to-end application development with modern frameworks and tools</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🏗️</div>
            <h4>System Architecture</h4>
            <p>Designing scalable and maintainable software architectures</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">⚡</div>
            <h4>Performance Optimization</h4>
            <p>Optimizing applications for speed, efficiency, and user experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
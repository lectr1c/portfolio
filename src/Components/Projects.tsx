import "../Styles/Projects.scss";
import { useState } from "react";
import { HiExternalLink, HiCode, HiTag } from "react-icons/hi";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "Frontend" | "Backend" | "Full-Stack";
  demoLink?: string;
  githubLink?: string;
  features: string[];
  status: "Completed" | "In Progress" | "Planned";
}

const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A modern, full-featured e-commerce platform with real-time inventory management and secure payment processing.",
    longDescription: "A comprehensive e-commerce solution built with Next.js and Node.js. Features include user authentication, product catalog, shopping cart, secure checkout with Stripe integration, admin dashboard, order management, and real-time inventory updates.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis"],
    category: "Full-Stack",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/ecommerce",
    features: [
      "User authentication & authorization",
      "Product catalog with search & filters",
      "Shopping cart & checkout process",
      "Payment processing with Stripe",
      "Admin dashboard",
      "Order tracking & management",
      "Real-time inventory updates",
      "Email notifications"
    ],
    status: "Completed"
  },
  {
    id: "task-management-api",
    title: "Task Management API",
    description: "RESTful API for task management with team collaboration features, built with Java Spring Boot.",
    longDescription: "A robust REST API built with Java Spring Boot for managing tasks and projects. Includes user management, team collaboration, role-based access control, real-time notifications, and comprehensive logging.",
    technologies: ["Java", "Spring Boot", "MySQL", "JWT", "Docker", "AWS"],
    category: "Backend",
    githubLink: "https://github.com/example/task-api",
    features: [
      "RESTful API design",
      "User authentication with JWT",
      "Role-based access control",
      "Task CRUD operations",
      "Team collaboration features",
      "Real-time notifications",
      "API documentation with Swagger",
      "Docker containerization"
    ],
    status: "Completed"
  },
  {
    id: "realtime-chat",
    title: "Real-time Chat Application",
    description: "A modern chat application with real-time messaging, file sharing, and video calling capabilities.",
    longDescription: "A full-stack real-time chat application built with React and Socket.io. Features include instant messaging, file sharing, emoji reactions, typing indicators, online status, and integrated video calling.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    category: "Full-Stack",
    demoLink: "https://chat-demo.example.com",
    githubLink: "https://github.com/example/chat-app",
    features: [
      "Real-time messaging",
      "File sharing capabilities",
      "Emoji reactions & typing indicators",
      "Online status tracking",
      "Group chat functionality",
      "Video calling integration",
      "Message history & search",
      "Responsive design"
    ],
    status: "In Progress"
  },
  {
    id: "data-visualization",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for data visualization with multiple chart types and real-time data updates.",
    longDescription: "A comprehensive data visualization platform built with React and D3.js. Provides interactive charts, real-time data streaming, customizable dashboards, and export capabilities for business intelligence.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    category: "Frontend",
    demoLink: "https://dashboard.example.com",
    features: [
      "Interactive charts & graphs",
      "Real-time data streaming",
      "Customizable dashboard layouts",
      "Data filtering & drill-down",
      "Export to PDF/Excel",
      "Responsive design",
      "Performance optimization",
      "Multiple data source integration"
    ],
    status: "Completed"
  },
  {
    id: "microservices-architecture",
    title: "Microservices Architecture",
    description: "Scalable microservices architecture with service discovery, load balancing, and monitoring.",
    longDescription: "A cloud-native microservices architecture built with Spring Boot and deployed on AWS. Includes API gateway, service discovery, distributed tracing, and comprehensive monitoring with health checks.",
    technologies: ["Java", "Spring Boot", "Docker", "AWS", "Kubernetes", "Redis"],
    category: "Backend",
    features: [
      "Service discovery & registration",
      "API Gateway routing",
      "Load balancing",
      "Circuit breaker pattern",
      "Distributed logging",
      "Health monitoring",
      "Auto-scaling capabilities",
      "CI/CD pipeline integration"
    ],
    status: "In Progress"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with dark mode, animations, and optimized performance.",
    longDescription: "A modern portfolio website built with React and TypeScript. Features responsive design, dark/light mode switching, smooth animations, and performance optimizations for excellent user experience.",
    technologies: ["React", "TypeScript", "SCSS", "Vite"],
    category: "Frontend",
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    features: [
      "Responsive design",
      "Dark/Light mode toggle",
      "Smooth animations",
      "Performance optimization",
      "SEO friendly",
      "Accessibility compliant",
      "Modern UI/UX design",
      "Fast loading times"
    ],
    status: "Completed"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "status-completed";
      case "In Progress": return "status-progress";
      case "Planned": return "status-planned";
      default: return "status-completed";
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A showcase of my recent work and technical expertise</p>
        </div>

        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-status">
                  <span className={`status-badge ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-more">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>

              <div className="project-actions">
                <button 
                  className="btn-details"
                  onClick={() => setSelectedProject(project)}
                >
                  <HiTag />
                  View Details
                </button>
                
                <div className="project-links">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="Live Demo"
                    >
                      <HiExternalLink />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View Code"
                    >
                      <HiCode />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
              </div>

              <div className="modal-content">
                <div className="project-meta">
                  <span className={`status-badge ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                  <span className="project-category">{selectedProject.category}</span>
                </div>

                <p className="project-long-description">
                  {selectedProject.longDescription}
                </p>

                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech-full">
                  <h4>Technologies Used</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.demoLink && (
                    <a 
                      href={selectedProject.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <HiExternalLink />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a 
                      href={selectedProject.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <HiCode />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
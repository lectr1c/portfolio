import "../Styles/Navigation.scss";
import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

interface NavigationItem {
  name: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  const handleNavItemClick = (href: string) => {
    // Close mobile menu when navigation item is clicked
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-container">
      <div className="header">
        <div className="nav-brand">
          <a href="#hero" className="brand-link">
            Razzaq
          </a>
        </div>
        
        <nav className="desktop-nav">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavItemClick(item.href)}
              className="nav-link"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <HiOutlineMoon className="theme-icon" />
            ) : (
              <HiOutlineSun className="theme-icon" />
            )}
          </button>
        </div>
      </div>

      <div className="mobile-nav">
        <div className="nav-brand">
          <a href="#hero" className="brand-link">
            Razzaq
          </a>
        </div>
        
        <div className="mobile-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle mobile"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <HiOutlineMoon className="theme-icon" />
            ) : (
              <HiOutlineSun className="theme-icon" />
            )}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>
        </div>
        
        <nav 
          id="mobile-navigation"
          className={`mobile-dropdown ${isMenuOpen ? 'active' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          {navigationItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleNavItemClick(item.href)}
              className="mobile-nav-link"
              tabIndex={isMenuOpen ? 0 : -1}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

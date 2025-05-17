import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false); // close menu on route change
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContainer = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    width: '90%',
    maxWidth: '1200px',
    backgroundColor: '#000',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease-in-out',
    backdropFilter: 'blur(10px)',
  };

  const brandStyle = {
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007bff',
  };

  const navListStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  };

  const navLinkStyle = (isActive) => ({
    textDecoration: 'none',
    fontWeight: '500',
    color: isActive ? '#007bff' : '#ffffff',
    fontSize: '1rem',
    padding: '8px 14px',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
    backgroundColor: isActive ? 'rgba(0, 123, 255, 0.1)' : 'transparent',
  });

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
  };

  const lineStyle = {
    width: '24px',
    height: '3px',
    backgroundColor: '#ffffff',
    borderRadius: '3px',
    transition: '0.3s',
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    overflow: 'hidden',
  };

  const mobileNavLinkStyle = (index, isActive) => ({
    textDecoration: 'none',
    fontWeight: '500',
    color: isActive ? '#007bff' : '#555', // grey by default
    fontSize: '1rem',
    padding: '8px 14px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    backgroundColor: isActive ? 'rgba(0, 123, 255, 0.1)' : 'transparent',
    opacity: 0,
    animation: `dropdownFade 0.5s ease forwards`,
    animationDelay: `${index * 0.1}s`,
  });

  return (
    <nav style={navContainer}>
      <Link to="/" style={brandStyle}>KSHITIJ</Link>

      {/* Desktop Nav */}
      <div className="nav-links" style={navListStyle}>
        {['/', '/projects', '/resume', '/contact'].map((path, i) => (
          <Link
            key={path}
            to={path}
            style={navLinkStyle(location.pathname === path)}
          >
            {['Home', 'Projects', 'Resume', 'Contact'][i]}
          </Link>
        ))}
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="hamburger"
        style={hamburgerStyle}
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-menu" style={mobileMenuStyle}>
          {['/', '/projects', '/resume', '/contact'].map((path, i) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              style={mobileNavLinkStyle(i, location.pathname === path)}
            >
              {['Home', 'Projects', 'Certificates', 'Contact'][i]}
            </Link>
          ))}
        </div>
      )}

      {/* Styles */}
      <style>
        {`
          @keyframes dropdownFade {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
          }

          @media (min-width: 769px) {
            .mobile-menu {
              display: none !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;

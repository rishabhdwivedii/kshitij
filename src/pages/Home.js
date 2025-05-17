import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const homeStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    background: '#f4f4f4',
    color: '#333',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    minHeight: 'calc(100vh - 120px)', // Adjusted minHeight to account for footer
    justifyContent: 'space-between',
  };

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '40px',
  };

  const titleStyles = {
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#007bff',
    letterSpacing: '-0.05em',
  };

  const wizardStyles = {
    fontSize: '1.3em',
    color: '#6c757d',
    marginBottom: '25px',
  };

  const paragraphStyles = {
    fontSize: '1em',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto 25px',
    color: '#555',
  };

  const expertiseHighlight = {
    color: '#28a745',
    fontWeight: 'bold',
  };

  const buttonContainerStyles = {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  const footerStyles = {
    backgroundColor: '#333',
    color: 'white',
    padding: '30px 20px', // Increased padding for better spacing
    textAlign: 'center',
    fontSize: '0.9em', // Slightly increased font size for better readability
  };

  const socialBarStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Increased gap between icons
    marginBottom: '20px', // Added margin below social bar
  };

  const socialIconLinkStyles = {
    color: 'white',
    fontSize: '1.5em', // Increased icon size
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const socialIconLinkHoverStyles = {
    color: '#007bff',
  };

  const contactInfoStyles = {
    marginBottom: '15px',
  };

  const linkInFooterStyles = {
    color: '#007bff',
    textDecoration: 'underline',
  };

  const copyrightStyles = {
    fontSize: '0.85em',
    color: '#ccc',
  };

  return (
    <div className="home" style={homeStyles}>
      <div style={contentStyles}>
        <h1 style={titleStyles}>KSHITIJ</h1>
        <p style={wizardStyles}>DIGITAL MARKETING WIZARD</p>
        <p style={paragraphStyles}>
          In the fast-evolving world of digital marketing, standing out is not an option - it’s a necessity! I’m Kshitij, a results-driven digital marketing expert, dedicated to helping businesses boost online visibility, generate leads, and maximize ROI with cutting-edge{' '}
          <span style={expertiseHighlight}>SEO</span>,{' '}
          <span style={expertiseHighlight}>social media marketing</span>,{' '}
          <span style={expertiseHighlight}>content marketing</span>,{' '}
          <span style={expertiseHighlight}>PPC advertising</span>, and{' '}
          <span style={expertiseHighlight}>growth strategies</span>.
        </p>
        <p style={paragraphStyles}>
          I specialize in crafting tailored campaigns that drive organic traffic, increase brand awareness, and enhance customer retention. Whether you're a startup looking for brand positioning or an established business aiming for digital expansion, I have the expertise to take your brand to the next level.
        </p>
        <div style={buttonContainerStyles}>
          <a href="/resume" style={buttonStyles} onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyles)} onMouseOut={(e) => Object.assign(e.target.style, buttonStyles)}>
            Resume
          </a>
          <a href="/projects" style={buttonStyles} onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyles)} onMouseOut={(e) => Object.assign(e.target.style, buttonStyles)}>
            PROJECTS
          </a>
          <a href="/contact" style={buttonStyles} onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyles)} onMouseOut={(e) => Object.assign(e.target.style, buttonStyles)}>
            Contact Me
          </a>
        </div>
        {/* You can add the image here if you have it as an asset */}
        {/* <img src="/path/to/your/image.jpg" alt="Kshitij" style={{ maxWidth: '300px', borderRadius: '10px' }} /> */}
      </div>

      <footer style={footerStyles}>
        <div style={socialBarStyles}>
          <a href="https://www.instagram.com/kshitij.singh.chauhan/" target="_blank" rel="noopener noreferrer" style={socialIconLinkStyles} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = 'white'}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/kshitij.singh.9421450" target="_blank" rel="noopener noreferrer" style={socialIconLinkStyles} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = 'white'}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://x.com/kshitij_singh08" target="_blank" rel="noopener noreferrer" style={socialIconLinkStyles} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = 'white'}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/kshitijsinghchauhan/" target="_blank" rel="noopener noreferrer" style={socialIconLinkStyles} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = 'white'}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.youtube.com/@KshitijSinghChauhan" target="_blank" rel="noopener noreferrer" style={socialIconLinkStyles} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = 'white'}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div style={contactInfoStyles}>
          Contact: <a href="tel:+919170770845" style={linkInFooterStyles}>+91 9170770845</a> |{' '}
          Email: <a href="mailto:its.kshitijsingh08@gmail.com" style={linkInFooterStyles}>its.kshitijsingh08@gmail.com</a>
        </div>
        <p style={copyrightStyles}>© {new Date().getFullYear()} Kshitij Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
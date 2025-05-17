import React from 'react';

function Contact() {
  const contactContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    fontFamily: 'sans-serif',
    background: '#f8f8f8',
    color: '#333',
    minHeight: 'calc(100vh - 80px)', // Adjust based on header/footer height
  };

  const sectionStyles = {
    maxWidth: '800px',
    width: '100%',
    padding: '30px',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  };

  const headingStyles = {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const contactInfoStyles = {
    marginBottom: '25px',
  };

  const contactHeadingStyles = {
    fontSize: '1.8em',
    color: '#343a40',
    marginBottom: '15px',
  };

  const contactDetailStyles = {
    fontSize: '1em',
    lineHeight: '1.6em',
    color: '#495057',
    marginBottom: '10px',
  };

  const linkStyles = {
    color: '#007bff',
    textDecoration: 'underline',
  };

  const formStyles = {
    marginTop: '30px',
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#343a40',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '1em',
  };

  const buttonStyles = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  };

  return (
    <div style={contactContainerStyles}>
      <h1 style={headingStyles}>Contact Us</h1>

      <div style={sectionStyles}>
        <div style={contactInfoStyles}>
          <h2 style={contactHeadingStyles}>Get in touch</h2>
          <p style={contactDetailStyles}>
            Get in touch with me for personalized digital marketing services or full-time work opportunities.
          </p>
          <h3 style={{ ...contactHeadingStyles, fontSize: '1.5em', marginTop: '20px' }}>Phone</h3>
          <p style={contactDetailStyles}>+91 9170770845</p>

          <h3 style={{ ...contactHeadingStyles, fontSize: '1.5em' }}>Email</h3>
          <p style={contactDetailStyles}>
            <a href="mailto:its.kshitijsingh08@gmail.com" style={linkStyles}>
              its.kshitijsingh08@gmail.com
            </a>
          </p>
        </div>

        <div style={formStyles}>
          <h2 style={contactHeadingStyles}>Send me a message</h2>
          <form aria-label="Contact Form">
            <div>
              <label htmlFor="firstName" style={labelStyles}>
                First Name
              </label>
              <input type="text" id="firstName" style={inputStyles} />
            </div>
            <div>
              <label htmlFor="lastName" style={labelStyles}>
                Last Name
              </label>
              <input type="text" id="lastName" style={inputStyles} />
            </div>
            <div>
              <label htmlFor="email" style={labelStyles}>
                Email
              </label>
              <input type="email" id="email" style={inputStyles} />
            </div>
            <div>
              <label htmlFor="phone" style={labelStyles}>
                Phone
              </label>
              <input type="tel" id="phone" style={inputStyles} />
            </div>
            <div>
              <label htmlFor="companyName" style={labelStyles}>
                Company Name (Optional)
              </label>
              <input type="text" id="companyName" style={inputStyles} />
            </div>
            <div>
              <button type="submit" style={buttonStyles}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
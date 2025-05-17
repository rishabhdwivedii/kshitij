import React from 'react';

function Resume() {
  const resumeContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    fontFamily: 'sans-serif',
    background: '#f8f8f8',
    color: '#333',
    minHeight: 'calc(100vh - 80px)', // Adjust based on header/footer
  };

  const sectionStyles = {
    maxWidth: '800px',
    width: '100%',
    marginBottom: '30px',
    padding: '20px',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyles = {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const downloadSectionStyles = {
    ...sectionStyles,
    textAlign: 'center',
  };

  const downloadLinkStyles = {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: '#28a745',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '1em',
    transition: 'background-color 0.3s ease',
  };

  const experienceSectionStyles = {
    ...sectionStyles,
  };

  const experienceTitleStyles = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: '15px',
  };

  const jobEntryStyles = {
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #eee',
  };

  const jobTitleStyles = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '5px',
  };

  const companyStyles = {
    fontSize: '1em',
    color: '#6c757d',
    marginBottom: '5px',
  };

  const durationStyles = {
    fontSize: '0.9em',
    color: '#555',
    marginBottom: '10px',
  };

  const descriptionStyles = {
    fontSize: '1em',
    lineHeight: '1.6',
    color: '#444',
  };

  const educationSectionStyles = {
    ...sectionStyles,
  };

  const educationTitleStyles = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: '15px',
  };

  const degreeEntryStyles = {
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #eee',
  };

  const degreeStyles = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '5px',
  };

  const institutionStyles = {
    fontSize: '1em',
    color: '#6c757d',
    marginBottom: '5px',
  };

  const yearStyles = {
    fontSize: '0.9em',
    color: '#555',
  };

  return (
    <div style={resumeContainerStyles}>
      <div style={downloadSectionStyles}>
        <h1 style={headingStyles}>KSHITIJ's RESUME</h1>
        <a
          href="https://91ba50f8-6785-4e7f-ae83-725d803ec03e.filesusr.com/ugd/d35eed_7636ffdc0dbc402faa7f48f02b882694.pdf"
          target="_blank"
          style={downloadLinkStyles}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1e7e34')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
        >
          Download
        </a>
      </div>

      <div style={experienceSectionStyles}>
        <h2 style={experienceTitleStyles}>Professional Experience</h2>
        <div style={jobEntryStyles}>
          <p style={durationStyles}>2024 (JUL) - 2025 (JAN)</p>
          <h3 style={jobTitleStyles}>Assistant Manager in Retail Operations</h3>
          <p style={companyStyles}>AXIS BANK (Axis House Noida)</p>
          <p style={descriptionStyles}>Worked as an assistant manager in retail operations in Credit Card lobby. Provided the resolution to problems of the customer and upgraded the cards of the customer as when required. (Operations handling and Upselling)</p>
        </div>
        <div style={jobEntryStyles}>
          <p style={durationStyles}>2023 (Aug) - 2023 (Oct)</p>
          <h3 style={jobTitleStyles}>Digital Marketing Internship - Content Writer</h3>
          <p style={companyStyles}>Web Ninja Solutions</p>
          <p style={descriptionStyles}>Worked as a content writer. Main tools used by me were Chat GPT and CANVA. Worked on full-fledged WordPress Dashboard, timely upload of SEO friendly content on three individual client’s websites along with graphics relevant to that content (Designed on CANVA and Photoshop) was been handled by me.</p>
        </div>
        <div style={jobEntryStyles}>
          <p style={durationStyles}>2022 (Sep) - 2023 (Jun)</p>
          <h3 style={jobTitleStyles}>WEAG (Magazine Editor)</h3>
          <p style={companyStyles}>An NGO driven by our college faculty</p>
          <p style={descriptionStyles}>An NGO driven by our college faculty where we worked for women empowerment. Worked as a magazine editor and refined my CANVA skills while doing activities like free education classes on weekends and clothes distribution.</p>
        </div>
      </div>

      <div style={educationSectionStyles}>
        <h2 style={educationTitleStyles}>Educational Background</h2>
        <div style={degreeEntryStyles}>
          <p style={yearStyles}>2022 - 2024</p>
          <h3 style={degreeStyles}>M.B.A Hons. (Marketing and HR)</h3>
          <p style={institutionStyles}>Babu Banarasi Das Institute of Technology and Management</p>
        </div>
        <div style={degreeEntryStyles}>
          <p style={yearStyles}>2019 - 2022</p>
          <h3 style={degreeStyles}>B. A (Bachelor in Arts) | AIH, Education, Economics</h3>
          <p style={institutionStyles}>University of Lucknow</p>
        </div>
        <div style={degreeEntryStyles}>
          <p style={yearStyles}>2018</p>
          <h3 style={degreeStyles}>Intermediate (Science Stream along with Computer Science)</h3>
          <p style={institutionStyles}>New Way Senior Secondary School (C.B.S.E Board)</p>
        </div>
        <div style={degreeEntryStyles}>
          <p style={yearStyles}>2016</p>
          <h3 style={degreeStyles}>High School</h3>
          <p style={institutionStyles}>New Way Senior Secondary School (C.B.S.E Board)</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
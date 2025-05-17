import React from 'react';

function Projects() {
  const projectsContainerStyles = {
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

  const projectSectionStyles = {
    ...sectionStyles,
  };

  const projectTitleStyles = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: '15px',
  };

  const projectEntryStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px solid #eee',
  };

  const textContentStyles = {
    flex: 1,
  };

  const imageStyles = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  const linkStyles = {
    color: '#007bff',
    textDecoration: 'underline',
  };

  const comingSoonStyles = {
    fontSize: '1.5em',
    color: '#6c757d',
  };

  return (
    <div style={projectsContainerStyles}>
      <h1 style={headingStyles}>Digital Marketing Projects</h1>

      <div style={projectSectionStyles}>
        <div style={projectEntryStyles}>
          <div style={textContentStyles}>
            <h2 style={{ ...projectTitleStyles, fontSize: '26px' }}>Personal Youtube Channel</h2>
            <p style={{ lineHeight: '1.6em', fontSize: '16px' }}>
              Back in my college days while learning about Digital Marketing and also having a deep interest in Technology, I created my{' '}
              <a href="https://youtube.com/@gadget_guru08?si=2mj6XghNf7iKnQhI" target="_blank" rel="noreferrer noopener" style={linkStyles}>
                Youtube Channel
              </a>
              . I uploaded content in a timely manner and I have seen constant growth in it.
            </p>
            <p style={{ lineHeight: '1.6em', fontSize: '16px' }}>
              My{' '}
              <a href="https://youtube.com/@gadget_guru08?si=GKNUx_3MkmbYn3w0" target="_blank" rel="noreferrer noopener" style={linkStyles}>
                Youtube Channel
              </a>{' '}
              has 45,000 + views and counting, Making it more aesthetically pleasing and professional. It also showcases my video editing skills. I am using DaVinci Resolve for video editing, which is an industry-level editor.
            </p>
            <p style={{ lineHeight: '1.6em', fontSize: '16px' }}>
              I started this channel in my college days while I was doing my MBA. Soon after my MBA, I was placed by my college in Axis Bank, Noida. While working, I didn't get enough time to upload content. But now I am actively working on it and following my content calendar.
            </p>
          </div>
          <a href="https://youtube.com/@gadget_guru08?si=2mj6XghNf7iKnQhI" target="_blank" rel="noreferrer noopener">
            <img
              src="https://static.wixstatic.com/media/d35eed_b7ff4bb00ef449a48314a8c280b7a112~mv2.png/v1/fill/w_614,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Purple%20and%20Blue%20Gradient%20Tech%20YouTube%20Icon.png"
              alt="Gadget guru Youtube Channel of Kshitij"
              style={imageStyles}
            />
          </a>
        </div>

        <div style={projectEntryStyles}>
          <div style={textContentStyles}>
            <h2 style={{ ...projectTitleStyles, fontSize: '26px' }}>Coming Soon</h2>
            <p style={{ lineHeight: '1.6em', fontSize: '16px' }}>W.I.P</p>
          </div>
          <div style={{ maxWidth: '490px' }}>
            <img
              src="https://static.wixstatic.com/media/d35eed_2f24b273ff55413baf23d444ebbae7e5~mv2.png/v1/fill/w_613,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Intro_comp-kjcl52y9.png"
              alt="Intro.comp-kjcl52y9.png"
              style={imageStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
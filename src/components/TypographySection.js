import React, { useState } from 'react';

function TypographySection() {
  // State for typography settings
  const [typographySettings, setTypographySettings] = useState({
    h1: { fontFamily: 'sans-serif', fontWeight: 600, fontSize: '2rem', color: '#000000', lineHeight: '100%' },
    h2: { fontFamily: 'sans-serif', fontWeight: 500, fontSize: '1.75rem', color: '#000000', lineHeight: '100%' },
    h3: { fontFamily: 'sans-serif', fontWeight: 400, fontSize: '1.5rem', color: '#000000', lineHeight: '100%' },
    h4: { fontFamily: 'sans-serif', fontWeight: 400, fontSize: '1.25rem', color: '#000000', lineHeight: '100%' },
    p: { fontFamily: 'sans-serif', fontWeight: 400, fontSize: '1rem', color: '#000000', lineHeight: '100%' },
    // Add more states for H3, H4, paragraphs, etc.
  });

  // Function to handle changes
  const handleTypographyChange = (element, property, value) => {
    setTypographySettings(prevSettings => ({
      ...prevSettings,
      [element]: {
        ...prevSettings[element],
        [property]: value,
      },
    }));
  };

  return (
    <div className="section">
      <div className="padding-global">
        <div className="container-large">
        <div className='spacerLarge'></div>
          <div className="ContainerTitle-Wrapper">
            <h2 className="h2-title">Typography Settings</h2>
          </div>
          {/* Form inputs for typography settings go here */}
          <div className="typography-controls">
            {/* Example: Input for changing H1 font size */}
            <label>H1 Font Size:</label>
            <input
              type="text"
              value={typographySettings.h1.fontSize}
              onChange={(e) => handleTypographyChange('h1', 'fontSize', e.target.value)}
            />
            {/* Add more inputs for other properties and elements */}
          </div>
          {/* Preview elements */}
          <div className="typography-preview">
            <h1 style={typographySettings.h1}>This is a preview of H1</h1>
            <h2 style={typographySettings.h2}>This is a preview of H2</h2>
            {/* Add more preview elements */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypographySection;
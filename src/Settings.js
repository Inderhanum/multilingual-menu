import React from 'react';

function Settings({ setLanguage }) {
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="fullscreen-image"
    style={{ backgroundImage: "url('/images/sports.jpg')" }}>
      <div className="overlay"></div>
      <div className="content">
        
      
      <h2>Settings</h2>
      <label>
        Select Language:
        <select onChange={handleChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="ru">Russian</option>
          <option value="es">Spanish</option>
          <option value="zh">Chinese</option>
        </select>
      </label>
    </div>
    </div>
  );
}

export default Settings;

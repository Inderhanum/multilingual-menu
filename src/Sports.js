import React from 'react';

function Sports() {
  return (
    <div
      className="fullscreen-image"
      style={{ backgroundImage: "url('/sports.jpeg')" }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2>Welcome to Sports</h2>
      </div>
    </div>
  );
}

export default Sports;

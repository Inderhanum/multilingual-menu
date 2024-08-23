import React from 'react';

function Live() {
  return (
    <div
      className="fullscreen-image"
      style={{ backgroundImage: "url('/live.jpeg')" }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2>Welcome to Live</h2>
      </div>
    </div>
  );
}

export default Live;

import React from 'react';

function TVShows() {
  return (
    <div
      className="fullscreen-image"
      style={{ backgroundImage: "url('/tvshows.jpeg')" }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2>Welcome to TV Shows</h2>
      </div>
    </div>
  );
}

export default TVShows;

import React from 'react';

function Movies() {
  return (
    <div
      className="fullscreen-image"
      style={{ backgroundImage: "url('/movies.jpeg')" }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2>Welcome to Movies</h2>
      </div>
    </div>
  );
}

export default Movies;

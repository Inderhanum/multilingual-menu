import React from 'react';

function Home() {
  return (
    <div
      className="fullscreen-image"
      // style={{ backgroundImage: "url('/home.jpeg')" }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2>Welcome to Home</h2>
      </div>
    </div>
  );
}

export default Home;

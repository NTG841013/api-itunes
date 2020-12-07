import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <h3>GET</h3>
      <div className="home-wrap">
        <h1>MUSIC</h1>
        <img
          src="./music1.png"
          alt="music"
          width="50%"
          height="280"
          className="img"
        />
      </div>
      <br />
      <div className="home-wrap">
        <h1>VIDEOS</h1>
        <img
          src="./videos3.jpg"
          alt="video"
          width="50%"
          height="310"
          className="img"
        />
      </div>
      <br />
      <div className="home-wrap">
        <h1>MOVIES</h1>
        <img
          src="./movies4.png"
          alt="movie"
          width="50%"
          height="310"
          className="img"
        />
      </div>
      <br />
      <div className="home-wrap">
        <h1>AUDIO BOOKS</h1>
        <img
          src="./book5.jpg"
          alt="audio"
          width="50%"
          height="310"
          className="img"
        />
      </div>
    </div>
  );
}

export default Home;

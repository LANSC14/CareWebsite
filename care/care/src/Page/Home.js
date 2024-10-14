import React from 'react';
import Img from '../assets/Img.js';

function Home() {
  return (
    <div className="home">
      <img src={Img.home} alt="Home Page" className="home-image"/>
      <h2>網站使命</h2>
      <p>為什麼需要我們?</p>
    </div>
  );
}

export default Home;

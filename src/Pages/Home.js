import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-text">
          <h1 className="home-text-title">Identifying feelings leads to happy feelings.</h1>
          <p className="home-text-p"></p>
          <p className="home-text-p-green"></p>
        </div>
        <button>Start</button>
      </div>
      <div className="home-right">
        <i className="fas fa-hourglass-half"></i>
      </div>
    </div>
  )
};

export default Home;
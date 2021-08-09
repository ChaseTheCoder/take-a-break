import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-text">
          <h1 className="home-text-title">Identifying feelings leads to happy feelings.</h1>
          <p className="home-text-p">Learning to identify your feelings daily will help with communicating those feelings.  Students can check in with this app when they have uncomfortable feelings.</p>
          <p className="home-text-p-green">No signup required!</p>
        </div>
        <button className="start-button">Start</button>
      </div>
      <div className="home-right">
        <i className="fas fa-hourglass-half"></i>
      </div>
    </div>
  )
};

export default Home;
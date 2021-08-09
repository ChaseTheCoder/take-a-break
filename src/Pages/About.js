import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-text">
          <h1 className="about-text-title">Instead of just taking a break, TakeABreak.</h1>
          <p className="about-text-p">TakeABreak allows a student to identify their emotion selecting an emoji.  Then it will bring them to a video where they can learn about that emotion.  Taking a break is now more purposeful.</p>
          <p className="about-text-p">Taking a break allows children time for reflecting on past experiences, and planning for the future.
Breaks throughout the school day can be an effective way to reduce disruptive behavior</p>
        </div>
      </div>
      <div className="about-right">
      <video src="./videos/child-meditate.mp4" autoPlay loop muted />
      </div>
    </div>
  )
};

export default About;

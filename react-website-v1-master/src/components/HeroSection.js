import React from 'react';
import '../App.css';
import './HeroSection.css';
import Video from '../videos/video-2.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted />
     
      <div className='hero-containerh1'>
      <h4>PAY QUICK AND SECURE</h4>
      <div className='hero-containerp'>
      <p>What are you waiting for?</p>
      </div>
      </div>
      
    </div>
  );
}

export default HeroSection;

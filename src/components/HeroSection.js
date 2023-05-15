import React from 'react';
import Button from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <section class="hero-section">
        <h1>Welcome to my Website</h1>
        <p>Here goes a short description of my website</p>
        <Button buttonSyle="btn-outline">View Portfolio</Button>
    </section>
    </>
  )
}

export default HeroSection
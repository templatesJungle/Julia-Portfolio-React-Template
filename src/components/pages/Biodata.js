import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Biodata() {
  useEffect(() => {
    Aos.init({once:true, easing:'ease-in-out-back'});
    
    return () => {
    }
  }, [])

  return (
    <>
    <section id="about" class="padding-large">
        <div class="container">
          <span class="sub-title">BIODATA</span>
          <div class="row d-flex flex-wrap">
            <div class="col-md-6 padding-medium no-padding-top">
              
              <h2 class="section-title" data-aos="fade-left" data-aos-delay='200'>Education</h2>
              
              <div class="data-info padding-small" data-aos="fade-left" data-aos-delay='400'>
                <span class="meta-date">1998 - 2004</span>
                <h3 class="info-title">Bachelors in Engineering in Information Technology</h3>
                <p>Harvard School of Science and management</p>
              </div>
              
              <div class="data-info" data-aos="fade-left" data-aos-delay='600'>
                <span class="meta-date">2004 - 2006</span>
                <h3 class="info-title">Masters in Data Analysis</h3>
                <p>Harvard School of Science and management</p>
              </div>
              
            </div>
            <div class="col-md-6 padding-medium no-padding-top">
              
              <h2 class="section-title" data-aos="fade-left" data-aos-delay='200'>Experiences</h2>
              
              <div class="data-info padding-small" data-aos="fade-left" data-aos-delay='400'>
                <span class="meta-date">2007 - 2012</span>
                <h3 class="info-title">Creative Agency Inc.: Design head</h3>
                <p>iacentem substantiales um se sed esse haec Possit facis qui a a a patriam.</p>
              </div>
              
              <div class="data-info" data-aos="fade-left" data-aos-delay='600'>
                <span class="meta-date">2013 - present</span>
                <h3 class="info-title">Studio Alpha.: Project Manager</h3>
                <p>iacentem substantiales um se sed esse haec Possit facis qui a a a patriam.</p>
              </div>

            </div>
            <div class="col-md-6 padding-medium no-padding-top">
              <h2 class="section-title" data-aos="fade-left" data-aos-delay='200'>Interests</h2>
              <div class="data-info padding-small" data-aos="fade-left" data-aos-delay='200'>
                <span class="meta-date">2007 - 2012</span>
                <h3 class="info-title">Bachelors in Engineering in Information Technology</h3>
                <p>Harvard School of Science and management</p>
              </div>
              <div class="data-info" data-aos="fade-left" data-aos-delay='200'>
                <span class="meta-date">2013 - present</span>
                <h3 class="info-title">Studio Alpha.: Project Manager</h3>
                <p>iacentem substantiales um se sed esse haec Possit facis qui a a a patriam.</p>
              </div>
            </div>
            <div class="col-md-6 padding-medium no-padding-top">
              <h2 class="section-title" data-aos="fade-left" data-aos-delay='200'>References</h2>
              <div class="data-info padding-small" data-aos="fade-left" data-aos-delay='200'>
                <span class="meta-date">1998 - 2004</span>
                <h3 class="info-title">Dr. Stephen H. King</h3>
                <p>iacentem substantiales um se sed esse haec Possit facis qui a a a patriam.</p>
              </div>
              <div class="data-info" data-aos="fade-left" data-aos-delay='200'>
                <span class="meta-date">2004 - 2006</span>
                <h3 class="info-title">Dr. Devi Prasad</h3>
                <p>iacentem substantiales um se sed esse haec Possit facis qui a a a patriam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Biodata
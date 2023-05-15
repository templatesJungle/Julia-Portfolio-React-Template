import React, { useEffect } from 'react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Works from '../../data/works.json';

function Portfolio() {
  useEffect(() => {
    Aos.init({once:true, easing:'ease-in-out-back'});
    return () => {
    }
  }, [])

  return (
    <>
    <section id="portfolio" className='padding-large'>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <div className="section-header">
                <span className="sub-title" data-aos="fade-bottom">some of my recent works</span>
                <h2 className="section-title" data-aos="fade-bottom" data-aos-delay='200'>Portfolio</h2>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-bottom" data-aos-delay='400'>
              <p>Labore accusam in modo compungi, iacentem substantiales um se sed esse haec.</p>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView = {4}
          spaceBetween = {30}
          slidesPerGroup = {1}
          loop = {true}
          loopFillGroupWithBlank = {true}
          pagination = {{
            el: "",
            clickable: true,
          }}
          className="portfolio-Swiper portfolio-content padding-medium"
        >
          {
          Works && Works.length>0 && Works.map((item) => {

            return (

            <SwiperSlide>
              <div className="image-holder">
                <img src={item.thumb} alt="portfolio" />
              </div>
              <div className="caption d-flex justify-content-between align-items-center">
                <div className="title">{item.title}</div>
                <a href='/' className="image-format bg-orange">{item.category}</a>
              </div>
            </SwiperSlide>
            
            )
          })

          }
       
          <div className="swiper-pagination"></div>
        </Swiper>

      </section>
    </>
  )
}

export default Portfolio
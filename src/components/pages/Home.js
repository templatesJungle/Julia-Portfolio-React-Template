import React from 'react';
import '../../App.css';
// import HeroSection from '../HeroSection';
import AnimatedText from '../AnimatedText';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [animate, setAnimate] = useState(false);
  const infoBoxes = [
    {
      id: '01',
      title: 'UI/UX Design',
      desc: 'At in proin consequat ut cursus venenatis sapien.'
    },
    {
      id: '02',
      title: 'Illustration',
      desc: 'At in proin consequat ut cursus venenatis sapien.'
    },
    {
      id: '03',
      title: 'Graphic Design',
      desc: 'At in proin consequat ut cursus venenatis sapien.'
    }
  ];

  useEffect(() => {
    Aos.init({once:true, easing:'ease-in-out-back'});
    setAnimate(true);
    // console.log(animate);
    return () => {
    }
  }, [])
  
  return (
    <>
      <div id="billboard" className="padding-medium">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
                <div className="banner-image" data-aos="fade-down">
                  <img src="./images/banner-image.png" alt="banner" />
                </div>
            </div>
            <div className="col-md-7">
              <div className="banner-content">
                <span className="sub-title" data-aos="fade-down">Designer / developer</span>
                
                <h1 className="banner-title">
                { animate && (
                  <>
                  <AnimatedText effect="slide">Thomas</AnimatedText>
                  <AnimatedText effect="slide">Charles</AnimatedText>
                  </>
                ) }
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-box-wrap">
        <div className="container">
          <div className="row">
            {
              infoBoxes && infoBoxes.length>0 && infoBoxes.map((item,i)=>{
                return(
                <div className="col-md-3" data-aos="fade-down" data-aos-delay={200*i}>
                  <div className="icon-box">
                    <span>{item.id}</span>
                    <h3 className="sub-heading">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
                )
              })
            }

            <div className="col-md-3" data-aos="fade-down" data-aos-delay="800">
              <div className="btn-right">
                <Link to='/' className="btn btn-medium btn-black text-uppercase">View All Work</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home
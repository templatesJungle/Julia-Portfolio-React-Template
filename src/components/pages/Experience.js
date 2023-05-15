import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Experience() {
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
    return () => {
    }
  }, [])
  return (
    <>
    <section id="experience" class="padding-large">
        <div class="container">
          <div class="row">
            <div class="content d-flex justify-content-between">
              <div class="col-md-3">
                <ul class="list-unstyled">
                  {
                  infoBoxes && infoBoxes.length>0 && infoBoxes.map((item,i)=>{
                    return(
                    <li data-aos="fade-down" data-aos-delay={200*i}>
                      <div className="icon-box">
                        <span>{item.id}</span>
                        <h3 className="sub-heading">{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                    )
                  })
                }
                </ul>
              </div>
              <div class="col-md-6">
                <div class="text-content">
                    <span class="sub-title" data-aos="fade-left" data-aos-delay='200'>introduction</span>
                    <h2 class="section-title" data-aos="fade-left" data-aos-delay='400'>Experienced Creative mind</h2>
                    <p data-aos="fade-left" data-aos-delay='600'>Labore accusam in modo compungi, iacentem substantiales um se sed esse haec.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Experience
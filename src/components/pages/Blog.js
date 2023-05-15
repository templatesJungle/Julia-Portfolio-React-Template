import React, { useEffect, useState } from 'react'
import ContentBlock from './ContentBlock'
import Posts from '../../data/posts.json';
import Fade from 'react-reveal/Fade';

// import Anime from 'react-anime';

function Blog() {
  // const [data,setData]=useState([]);
  // const getData=()=>{
  //   fetch('data/posts.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setData(myJson)
  //     });
  // }
  // useEffect(()=>{
  //   getData()
  // },[])

  return (
    <>
    <section id="blog">
        <div class="container">
          <div class="row">
            <div class="post-grid padding-large">
            {/* { <Anime opacity={[0, 1]} translateY={['-2em', '0em']} delay={(e, i) => i * 200}> } */}
            {
              Posts && Posts.length>0 && Posts.map((item)=>{
                return(
                  <Fade bottom>
                    <div className="col-md-6"><ContentBlock id={item.id} slug={item.slug} title={item.title} image={item.picture} /></div>
                  </Fade>
                );
            })
            }
            {/* </Anime> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
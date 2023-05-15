import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Posts from '../../data/posts.json';

function BlogSingle(props) {
    // console.log(props);
    // console.log(state);
    // const { id, slug, title } = props;
    
    const { id } = useParams();
    // let post = jsonData.find((data) => data.id == id);

    const [post, setPost] = useState({});

    const getData=()=>{
        // let post = Posts.find((data) => data.id === {id});
        // console.log(id);
        // console.log(post);

        if(Posts && Posts.length>0){
            for ( var i = 0; i < Posts.length; i++ ) {
                // console.log(Posts[i].id+':::'+id);
                if (Posts[i].id == id) {
                    setPost( Posts[i] );
                    
                    // console.log('::::'+Posts[i]);
                }
            }
        }

        console.log(post);

        // console.log(Posts[0]);
        // fetch(
        //     'data/posts.json',
        //     {
        //         headers : {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //         }
        //     }
        // )
        // .then(function(response){
        //     // console.log(response)
        //     return response.json();
        // })
        // .then(function(myJson) {
        //     // console.log(myJson);
        //     // setData(myJson)
        //     let post = myJson.find((data) => data.id === id);
        //     // if(myJson && myJson.length>0){
        //     //     for ( var i = 0; i < myJson.length; i++ ) {
        //     //         if (myJson[i].id === {id}) {
        //     //             // setPost( myJson[i] );
        //     //             console.log(myJson[i]);
        //     //         }
        //     //     }
        //     // }
        //     console.log(post);
        // });
    }
    useEffect(()=>{
        getData()
    },[])

  return (
    <>
    <main className="main-layout col-md-10 padding-large">

        <section id="single-post" className="hero-section">
            <div className="container">
                <div className="row">
                <div className="hero-content">
                    <div className="container">
                    <div className="row">
                        <div className="caption">
                        <div className="post-meta">
                            <span className="post-category">
                            <i className="icon icon-folder"></i>Business</span>
                            <span className="meta-day">
                            <i className="icon icon-clock"></i>12-03-2021</span>
                        </div>
                        <h1 className="page-title">{post.id}{post.title}</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <img src={`http://localhost:3000/${post.picture}`} alt="single post" />
                </div>
            </div>
        </section>

        <section className="post-content padding-small">
            <div className="container">
                <div className="row">
                <div className="wrapper">
                    
                    <p>{post.content}</p>

                    <p>Business migration into the cloud has been one of the most boggling innovations of the last decade. Cloud computing has revolutionized the world of information technology. Cloud computing refers to the provision of IT infrastructure,Guest Posting operating software, middleware, and <a href="#" className="colored">applications hosted</a> in a data center. It can be accessed on demand by the end-users via the internet.</p>

                    <blockquote className="bg-light-grey">
                    <p>"Cloud computing offers three primary service models that businesses opt to streamline their growth processes."</p>
                    </blockquote>

                    <p><strong>Infrastructure as a service (IaaS):</strong> This model allows businesses to access on-demand IT hardware like servers, data center space, and system administrators. It helps save a considerable chunk of money buying and building their in-house data center.</p>

                    <p><strong>Platform as a service (PaaS):</strong> This model allows app developers to create, run, and manage applications without requiring complex infrastructure associated with launching an application.</p>

                    <p><strong>Software as a service (SaaS):</strong> SaaS model provides licensing and delivering centrally hosted software via the internet on a subscription basis to businesses and end-users. A typical example of SaaS is a web-based email subscription.</p>
                </div>
                </div>
            </div>
        </section>

    </main>
    </>
  )
}

export default BlogSingle
import React from 'react'
import { Link } from 'react-router-dom'

function ContentBlock(props) {
    const { id, slug, title, image } = props;

  return (
    <>
    <article className="post-item">
        <div className="post-meta">
        <span className="post-category">
            <i className="icon icon-folder"></i>Business </span>
        <span className="meta-day">
            <i className="icon icon-clock"></i>12-03-2021 </span>
        </div>
        <div className="post-image">
            <img src={image} alt="image" className="post-grid-image"/>
        </div>
        <div className="post-content">
        <h3 className="post-title">
            <Link to={ { pathname:`/blog/${id}`, state:{post:props} } }>{id}{slug}{title}</Link>
        </h3>
        <p>Business migration into the cloud has been one of the most boggling innovations of the last decade. Cloud computing has revolutionized the world of information technology.</p>
        </div>
        <div className="btn-left">
        <Link to={`/blog/${id}`} className="btn btn-normal">Read More</Link>
        </div>
    </article>
    </>
  )
}

export default ContentBlock
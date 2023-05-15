import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  return (
    <>
    <header id="header" className="col-md-2">
      <div className="site-logo">
        <Link to='/'>
          <img src="/images/main-logo.png" alt="logo" />
        </Link>
      </div>
      <nav id="one-page-menu" className="vertical-menu">
        <ul className="menu-list list-unstyled">
          <li className="menu-item">
            <Link to='/' className="nav-link">Home</Link>
            <i className="icon icon-arrow-right"></i>
          </li>
          <li className="menu-item">
            <Link to='/biodata' className='nav-link'>Biodata</Link>
            <i className="icon icon-arrow-right"></i>
          </li>
          <li className="menu-item">
            <Link to='/experience' className='nav-link'>Experience</Link>
            <i className="icon icon-arrow-right"></i>
          </li>
          <li className="menu-item">
            <Link to='/portfolio' className='nav-link'>Works</Link>
            <i className="icon icon-arrow-right"></i>
          </li>
          <li className="menu-item">
            <Link to='/blog' className='nav-link'>Blog</Link>
            <i className="icon icon-arrow-right"></i>
          </li>
          <li className="menu-item">
            <Link to='/' className='nav-link'>References</Link>
            <i className="icon icon-arrow-right"></i>
          </li>
        </ul>
      </nav>
      <div className='user-content list-unstyled'>
        <div className='email-links'>
          <Link to='email:contact@yoursite.com'>contact@yoursite.com</Link>
        </div>
        <div className="social-links">
          <ul className="d-flex list-unstyled">
            <li>
              <Link to='/'>
                <i className="icon icon-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="icon icon-youtube-play"></i>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="icon icon-pinterest"></i>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="icon icon-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="icon icon-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="icon icon-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    </>
  )
}

export default NavBar
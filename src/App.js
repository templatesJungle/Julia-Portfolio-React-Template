import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Biodata from './components/pages/Biodata';
import Blog from './components/pages/Blog';
import Experience from './components/pages/Experience';
import BlogSingle from './components/pages/BlogSingle';
import NotFound from './components/pages/NotFound';

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     page: () => <Home />
//   },
//   {
//     path: "/about",
//     sidebar: () => <div>About!</div>,
//     page: () => <About />
//   },
//   {
//     path: "/portfolio",
//     sidebar: () => <div>Portfolio!</div>,
//     page: () => {<Portfolio />}
//   },
//   {
//     path: "/portfolio",
//     sidebar: () => <div>Portfolio!</div>,
//     page: () => {<Portfolio />}
//   },
//   {
//     path: "/portfolio",
//     sidebar: () => <div>Portfolio!</div>,
//     page: () => {<Portfolio />}
//   },
//   {
//     path: "/portfolio",
//     sidebar: () => <div>Portfolio!</div>,
//     page: () => {<Portfolio />}
//   }

// ];

function App() {
  return (
    <>
      <Router>
        <div className="bg-body homepage post-template">
        <NavBar />

        {/* <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={route.page}
          />
        ))}
        </Routes> */}

        <main className="main-layout">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/biodata' element={<Biodata />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/blog/:id' element={<BlogSingle />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        </div>
        
      </Router>
      
    </>
  );
}

export default App;

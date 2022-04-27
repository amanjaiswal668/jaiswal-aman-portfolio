import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import './navbar.css';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import logo from '../../logo.svg';
import mylogo from '../../assets/mylogo.png';
import customLogo from '../../assets/customLogo.png';
import { Article, CTA, Feature } from '../exportComponent';

// Custom menu 

const Menu = () => (
    <>
        <p> <a href="#home">Home</a></p>
        <p> <a href="#article">Projects</a></p>
        <p> <a href="#about">About</a></p>
        <p> <a href="#contact">Contact</a></p>
        <p> <a target = "_blank"href="https://www.dropbox.com/s/6ptas0nd6kf88lp/jaiswalAmanReaume_v1.pdf?dl=0">Resume</a></p>
    </>
)


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <Router>
            <div className="gpt3__navbar" id="navbar">
                <div className="gpt3__navbar-links">
                    <div className="gpt3__navbar-links_logo">
                        {/* <img src={customLogo} /> */}
                    </div>
                    <div className="gpt3__navbar-links_container">
                        <Menu />
                    </div>
                </div>
                <div className="gpt3__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <Routes>
                    {/* <Route exact path="/home" element={<Footer />} /> */}
                    <Route exact path="/about" element={<Feature />} />
                    <Route exact path="/contact" element={<CTA />} />
                </Routes>
            </div>
        </Router>
    );


};

export default Navbar

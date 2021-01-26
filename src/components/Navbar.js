import React, { useState } from 'react'
import logo from '../Fred-nobg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-scroll";



const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar ? 'navbar navbar-expand-lg bg-custom-light fixed-top' : 'navbar navbar-expand-lg bg-custom-grey fixed-top'}>
            <div className="container">
                <a className="navbar-brand" href="/#"><img className={navbar ? 'logo_w' : 'logo'} src={logo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon= {faBars} style={navbar ? {color: "#000000"} : {color:"#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={navbar ? "navbar-nav ml-auto nav_sp" : "navbar-nav ml-auto"}>
                        <li className="nav-item active">
                            <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from "react-share";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Burlington, Ontario, Canada</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: 514-638-0000">+1-514-638-0000</a>
                        </div>
                        <div className="d-flex">
                            <p>freddev972@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" offset={-110} className="footer-nav" href="/#">Home</Link>
                                <br/>
                                <Link smooth={true} to="about" offset={-110} className="footer-nav" href="/#">About me</Link>
                                <br/>
                                <Link smooth={true} to="experience" offset={-110} className="footer-nav" href="/#">Experience</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav" href="/#">Portfolio</Link>
                                <br/>
                                <Link smooth={true} to="contact" offset={-110} className="footer-nav" href="/#">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://www.facebook.com"}
                            quote={"Fullstack Developer Junior"}
                            hashtag="#rails"
                            >
                                <FacebookIcon className="mx-3" size={36} />    
                            </FacebookShareButton>
                            <TwitterShareButton
                            url={"https://www.twitter.com"}
                            quote={"Fullstack Developer Junior"}
                            hashtag="#rails"
                            >
                                <TwitterIcon className="mx-3" size={36} />    
                            </TwitterShareButton>
                            <LinkedinShareButton
                            url={"https://www.facebook.com"}
                            quote={"Fullstack Developer Junior"}
                            hashtag="#rails"
                            >
                                <LinkedinIcon className="mx-3" size={36} />    
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright©  
                            - {new Date().getFullYear()} - FMM | All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

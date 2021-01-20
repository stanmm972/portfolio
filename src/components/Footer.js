import React from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>city Burlington</p>
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
                                <a className="footer-nav" href="">Home</a>
                                <br/>
                                <a className="footer-nav" href="">About me</a>
                                <br/>
                                <a className="footer-nav" href="">Experience</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav" href="">Portfolio</a>
                                <br/>
                                <a className="footer-nav" href="">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6align-items-center">
                        <div className="dflex justify-content-center">
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
                            - {new Date().getFullYear()} - FMM | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="text-about">
            I am a junior full-stack web developer based in Burlington, Ontario,
            Canada. After working for the provincial gouvernment for 3 years as
            a customer service agent, I have decided to reconvert into a web
            developer by following 9 weeks coding bootcamp. I have a background
            in business administration where I worked for several companies such
            as Vinci Park, Discount Car Rental or Air Transat, to name a few. I
            have a strong expertise on what a customer is looking for. I'm
            available for freelance work and projects, as well if you want to
            hire me, contact me anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

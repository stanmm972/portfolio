import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>HTML, CSS, Bootstrap, Javascript, React</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>Ruby, NodeJs, ES6, jQuery, SQL, Git & GitHub, Heroku</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" />
              </div>
              <h3>Management</h3>
              <p>Client management, Project management</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Marketing Web</h3>
              <p>In collaboration with.....................</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

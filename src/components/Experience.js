import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 - Present</h3>
            <h4>Computer technician</h4>
            <h5>Barreau du Québec, Montréal QC (remote)</h5>
            <p>
              Ensure the reliability of the platform during virtual trainings
              and act as a facilitator by working closely with the trainers.
              Present the material in the different training platforms and
              technically support the speakers and participants. Testing of the
              virtual environment and solving all technical issues.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-Present</h3>
            <h4>Full stack developer</h4>
            <h5>SPH Contre le cancer, Burlington ON</h5>
            <p>
              Develop full-stack web applications which process, analyze, and
              render data visually.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2019</h3>
            <h4>Customer service representative</h4>
            <h5>Bureau de la sécurité privé, Montréal QC</h5>
            <p>
              Point of contact for customers to obtain licenses in various
              security fields.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2013-2016</h3>
            <h4>Shop supervisor</h4>
            <h5>Vinci Park Canada, Montréal QC</h5>
            <p>
              Supervise general operations and resolve customer complaints.
              Training of new employees.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011-2013</h3>
            <h4>Management supervisor</h4>
            <h5>Discount Car & Truck rentals, Montréal QC</h5>
            <p>Organize the branch fleet and ensure smooth daily operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

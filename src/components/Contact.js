import React, { useState } from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contact = () => {
        const [successMessage, setSuccessMessage] = useState("");
        const { register, handleSubmit, errors } = useForm();

        const serviceID = "service_06lbenu";
        const templateID = "template_zmuie1g";
        const userID = "user_x1GTLhDQM02QpH6LCxJV2";
        
        const onSubmit = (data, reset) => {
          sendEmail(
            serviceID,
            templateID,
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
          },
          userID
          )
          reset.target.reset();
        }

        const sendEmail = (serviceID, templateID, variables, userID) => {
      
          emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully!!! I'll contact as soon as possible.");
            }).catch(err => console.error(`Something went wrong ${err}`)) 
            ;
        }


  return (
    <div className="contact">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your project needs and I'll
          contact you as soon as possible.
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* NAME INPUT */}
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              ref={
                register({
                  required: "Please enter your name",
                  maxLength: {
                    value: 20,
                    message: "Please enter a name less than 20 characters"
                  }
                })
              }
            />
            <div className="line"></div>
            <span className="error-message">
              {errors.name && errors.name.message}
            </span>
            {/* PHONE INPUT */}
            <input
              id="phone"
              type="text"
              className="form-control"
              placeholder="Phone number"
              name="phone"
              ref={
                register({
                  required: "Please add your telephone number",   
                  })
              }
            />
            <div className="line"></div>
            <span className="error-message">
              {errors.phone && errors.phone.message}
            </span>
            {/* EMAIL INPUT */}
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              ref={
                register({
                  required: "Please enter your email address",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid Email"
                  }   
                  })
              }
            />
            <div className="line"></div>
            <span className="error-message">
              {errors.email && errors.email.message}
            </span>
            {/* SUBJEcT INPUT */}
            <input
              id="subject"
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
              ref={
                register({
                  required: "Don't forget to leave a message!",   
                  })
              }
            />
            <div className="line"></div>
            <span className="error-message">
              {errors.subject && errors.subject.message}
            </span>
          </div>
          <div className="col-md-6 col-xs-12">
            {/* DESCRIPTION */}
            <textarea
              id="description"
              type="text"
              className="form-control"
              placeholder="Please describe your project..."
              name="description"
              ref={
                register({
                  required: "Please describe your project needs....",   
                  })
              }
            />
            <div className="line"></div>
            <span className="error-message">
              {errors.description && errors.description.message}
            </span>
            <button className="btn-main-offer contact-btn" type="submit">
              contact me
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

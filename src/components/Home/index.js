import React from "react";
import { Link } from "react-router-dom";
// import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import "./HomeContent.css";

// import 'locomotive-scroll.css'

const Home = () => {
  const form = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0sscxso",
        "template_eddo0jj",
        form.current,
        "2OtesAymt5wLGrsSz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Navbar />
      <div className="home-main" id="main" data-scroll-container>
        <div className="bg-mask" data-scroll-section>
          <img
            className="home-image"
            src="https://res.cloudinary.com/dvu0weqay/image/upload/v1689584689/pexels-kevin-ku-577585_yharnd.jpg"
            alt="WorkDesk"
          />
        </div>
        <div className="content" data-scroll-section>
          <p data-scroll>Hi, I am </p>
          <h1 data-scroll>MH Faiz</h1>
          <p data-scroll>  I am a React Developer</p>
          <div data-scroll-section>
            <Link data-scroll
              to="https://drive.google.com/file/d/1aUKILKDO4abWBkUdSdJT3l_Rq4umqxam/view?usp=sharing"
              target="_blank"
            >
              <button type="button" className="btn btn-1 arrow">
                Get Resume
              </button>
            </Link>
            <div className="popup-container">
   <Popup
     modal
     trigger={
       <button type="button" className="trigger-button btn btn-2 arrow">
         Contact Me
       </button>
     }
   >
     {close => (
       <>
         <div className="home-form">
        <form onSubmit={onSubmitForm} ref={form}>
          <div className="form-element">
            <label htmlFor="name" className="form-label">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name Here"
              className="input-box"
            />
          </div>
          <div className="form-element">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email Here"
              className="input-box"
            />
          </div>
          <div className="form-element">
            <label htmlFor="Message" className="form-label">
              Message*
            </label>
            <textarea
              type="text"
              id="Message"
              name="Message"
              rows="7"
              cols="50"
              placeholder="Your Message Here"
              className="input-box"
            />
          </div>
          <div className="home-form-button">
          <button type="submit" className="btn btn-1 arrow">
            Send
          </button>
          <button
           type="button"
           className="trigger-button btn btn-2 arrow"
           onClick={() => close()}
         >
           Close
         </button>
          </div>
        </form>
         </div>
       </>
     )}
   </Popup>
 </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

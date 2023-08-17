import React from "react";
import { Link } from "react-router-dom";
// import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./HomeContent.css";
// import 'locomotive-scroll.css'

const Home = () => {

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
            <Link to="/Contact" data-scroll>
              <button type="button" className="btn btn-2 arrow">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

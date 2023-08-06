import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import "./index.css";

function App() {
  const minicircle=React.createRef();

  useEffect(()=>{
    let timer;
    function squishTheCircle(){
      let xscale=1;
      let yscale=1;
  
      let xprev = 0;
      let yprev=0;
      window.addEventListener("mousemove", function(dets){
          clearTimeout(timer);
          xscale=gsap.utils.clamp(0.8,1.2,dets.clientX - xprev);
          yscale=gsap.utils.clamp(0.8,1.2,dets.clientY - yprev);
          
          xprev=dets.clientX;
          yprev=dets.clientY;
  
          circleMouseFollower(xscale, yscale);
          timer = setTimeout(function(){
              document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px, ${dets.clientY}px ) scale(1,1)`;
          }, 100)
      })
  }
  
  squishTheCircle();
  
  function circleMouseFollower(xscale, yscale){
      window.addEventListener("mousemove", function(dets){
          document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px, ${dets.clientY}px ) scale(${xscale}, ${yscale})`;
      })
  }
  
  circleMouseFollower();
  },[minicircle]);
  return (
    <>
    <div id="minicircle" ref={minicircle}>

    </div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/projects" Component={Projects} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;

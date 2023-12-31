import React, {useEffect} from "react";
import { gsap } from "gsap";
import './Gola.css'

function Gola() {
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
            xscale=gsap.utils.clamp(0.9,1.5,dets.clientX - xprev);
            yscale=gsap.utils.clamp(0.5,1.5,dets.clientY - yprev);
            
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
      <div id="minicircle" ref={minicircle}></div>
      )
    }

export default Gola
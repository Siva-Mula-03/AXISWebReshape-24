// Home.js
import React from "react";
import "./h.css";
import Events from '../events/event';
import AxisComponent from '../stats/msg';
import vid from '../../ud.mp4';
import imageb from '../../image.png';
import AxisThemeVideo from "../themevideo/themev";
import Merch from "../merch/merchv";
import ImageRoll1 from '../imageroll1/imageroll1';
import ImageRoll2 from './imageroll2/ImageRoll2';
import ImageRoll3 from "./imageroll3/ImageRoll3";
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div className="home-container">
    <img style={{width:"65%",height:"65%",margin:"50px",marginLeft:"-50px"}} src={imageb}></img>

          <video className="w-full h-50%" autoPlay loop muted>
    <source src={vid} type='video/mp4'/>
     </video>

      {/* <div id="main2" className="full-screen-vanta"></div> */}
      <div className="content-container">
   
         <AxisComponent /> 
        <br></br>

        <AxisThemeVideo />
        <br></br>
     <Merch/>
     <Events/>
        {/* <Timeline /> */}
        <br></br>
      <ImageRoll1/> 
      <br></br>
      <br></br>
      <br></br>
      <ImageRoll2 />
      <br></br>
      <br></br>
      <br></br>
      <ImageRoll3 />
      <br>
      </br>
      </div>
    </div>
  );
};

export default Home;

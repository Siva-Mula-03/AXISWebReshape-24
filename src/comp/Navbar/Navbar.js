import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Nv.css";
import AxisLogo from "./axis.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const DefaultNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (

    
    <nav className="content backdrop-blur-lg sticky navbar">
      <div className="block md:hidden">
        <br />
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center">
            <a href="/">
              <img
                loading="lazy"
                src={AxisLogo}
                width="450px"
                height="450px"
                alt="Axis Logo"
                style={{ marginLeft: "-250px " }}
              />
            </a>
            <div className="hidden md:block"></div>
          </div>

          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-8 text-black font-mullish font-medium large-font">
              <li className="hover:text-blue-500">
                <HashLink smooth to="#">
                 <b>Home</b> 
                </HashLink>
              </li>
              <li className="hover:text-darkblue-500">
                <HashLink smooth to="#">
                <b>Events</b>
                </HashLink>
              </li>
              <li className="hover:text-darkblue-500">
                <HashLink smooth to="#">
                <b>CA Portal</b>
                </HashLink>
              </li>
              <li className="hover:text-darkblue-500">
                <HashLink smooth to="#">
                <b>Sponsors</b>
                </HashLink>
              </li>
              <div className="dropdown">
                <HashLink smooth to="#" className="dropbtn">
                <b style={{color:"darkblue"}}>Workshops</b> <span className="dropdown-symbol">&#9658;</span>
                </HashLink>
                <div className="dropdown-content">
                  <a href="#">Workshops</a>
                  <a href="#">Accommodation</a>
                </div>
              </div>

              <li className="hover:text-blue-500">
                <HashLink smooth to="#">
                <b>Our Team!</b>
                </HashLink>
              </li>
            </ul>
            


          </div>
          

        </div>
        </div>
        <button type="button" class="btn btn-primary btn-lg" style={{marginRight:"100px"}}>Login</button>
    </nav>
  );
};

export { DefaultNavbar };

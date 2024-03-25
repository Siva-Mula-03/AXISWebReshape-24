import React from 'react';
import robo from './robo.png';
import man from './MAN.png';
import se from './SE.png';
import cd from './CD.png';

const Events = () => {
  return (
    <div className="py-20 px-10 text-center">
      <h1 className="text-white text-8xl font-bold mb-12">Events</h1>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="relative overflow-hidden border border-gray-20 rounded-lg shadow-lg transition-transform duration-300 transform-gpu hover:scale-105 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black bg-opacity-50 hover:bg-opacity-75">
            <p className="text-white text-lg font-bold text-center">Robotics & Automation</p>
          </div>
          <img src={robo} alt="Robotics & Automation" style={{ width: "400px", height: "400px" }} />
          <span className="text-white font-bold ml-4 text-center text-lg">Robotics & Automation</span>
        </div>
        <hr />
        <div className="relative overflow-hidden border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 transform-gpu hover:scale-105 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black bg-opacity-50 hover:bg-opacity-75">
            <p className="text-white text-lg font-bold ">Management & Analytics</p>
          </div>
          <img src={man} alt="Management & Analytics" style={{ width: "400px", height: "400px" }} />
          <span className="text-white  font-bold ml-4 text-center text-lg">Management & Analytics</span>
        </div>

        <hr />
        <div className="relative overflow-hidden border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 transform-gpu hover:scale-105 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black bg-opacity-50 hover:bg-opacity-75">
            <p className="text-white text-lg font-bold">Construction & Design</p>
          </div>
          <img src={cd} alt="Construction & Design" style={{ width: "400px", height: "400px" }} />
          <span className="text-white  font-bold ml-4 text-center text-lg">Construction & Design</span>
        </div>
        <hr />
        <div className="relative overflow-hidden border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 transform-gpu hover:scale-105 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black bg-opacity-50 hover:bg-opacity-75">
            <p className="text-white text-lg font-bold">Software & Electronics</p>
          </div>
          <img src={se} alt="Software & Electronics" style={{ width: "400px", height: "400px" }} />
          <span className="text-white  font-bold ml-4 text-center text-lg">Software & Electronics</span>
        </div>
        <br></br>
        <br></br>
        <button className="relative overflow-hidden border border-gray-50 rounded-lg shadow-lg transition-transform duration-300 transform-gpu" style={{ fontSize: "30px", borderRadius: "1px solid white",width:"190px",marginLeft:"400px" }}>
  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0">
    <p className="text-white text-lg font-bold">More Work</p>
  </div>
  <span className="text-white text-lg font-bold">More Work..</span>
  <hr></hr>
</button>

      </div>
    </div>
  );
};

export default Events;

import React, { useState, useEffect } from 'react';
import dirimage from './image.png';

const AxisComponent = () => {
  const [events, setEvents] = useState(0);
  const [colleges, setColleges] = useState(0);
  const [footfall, setFootfall] = useState(0);
  const [showStats, setShowStats] = useState(false);
  
  // Define intervals outside of useEffect
  let eventsInterval;
  let collegesInterval;
  let footfallInterval;

  useEffect(() => {
    const increaseValues = () => {
      eventsInterval = setInterval(() => {
        setEvents(prevEvents => {
          const nextEvents = prevEvents + 1;
          return nextEvents >= 35 ? 35 : nextEvents;
        });
      }, 50);

      collegesInterval = setInterval(() => {
        setColleges(prevColleges => {
          const nextColleges = prevColleges + 1;
          return nextColleges >= 200 ? 200 : nextColleges;
        });
      }, 50);

      footfallInterval = setInterval(() => {
        setFootfall(prevFootfall => {
          const nextFootfall = prevFootfall + 1;
          return nextFootfall >= 25000 ? 25000 : nextFootfall;
        });
      }, 50);

      setTimeout(() => {
        clearInterval(eventsInterval);
        clearInterval(collegesInterval);
        clearInterval(footfallInterval);
        setShowStats(true);
      }, 6000);
    };

    increaseValues();

    // Clean up intervals
    return () => {
      clearInterval(eventsInterval);
      clearInterval(collegesInterval);
      clearInterval(footfallInterval);
    };
  }, []);

  return (
    <div classname="dirmsg">
      <div className="flex flex-col items-center mt-104 sm:mt-64 space-y-6">
        <div className="flex justify-center space-x-6">
          {showStats && (
            <div className="w-full flex justify-between">
              <div style={{marginLeft:"100px"}}>
                <h1 style={{ fontSize: "60px", color: "white" }}>EVENTS</h1>
                <div style={{ fontSize: "50px", color: 'rgb(67, 97, 238)' }}>
                  {events}+
                </div>
              </div>
              <div style={{marginLeft:"500px"}}>
                <h1 style={{ fontSize: "60px", color: "white" }}>COLLEGES</h1>
                <div style={{ fontSize: "50px", color: 'rgb(67, 97, 238)' }}>
                  {colleges}+
                </div>
              </div>
              <div style={{marginLeft:"600px"}}>
                <h1 style={{ fontSize: "60px", color: "white" }}>FOOTFALL</h1>
                <div style={{ fontSize: "50px", color: 'rgb(67, 97, 238)' }}>
                  {footfall}+
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Director Message Component */}
        <div className="bg-white w-full p-60 mb-8">
          <p style={{ marginLeft: "200px", fontSize: "80px", textAlign: "center", marginTop: "-100px" }} className="text-xl font-bold mb-2 ">Director's Desk</p>
          <div className="flex justify-between items-center" style={{ marginTop: "100px" }}>
            <img src={dirimage} alt="Left Side Photo" style={{ width: "750px", height: "500px", marginRight: "300px", borderRadius: "1px" }} />
            <div className="flex items-center">
              <div>
                <p style={{ fontSize: "30px", float: "right" }}>
                  I am elated to witness the diverse participation from universities and schools nationwide in AXIS for the last 24 years. Year after year, AXIS continues to bridge the gap between technology and tech enthusiasts. The competitions held during AXIS showcased some of India's brightest minds, competing and surmounting challenges for the betterment of society. I sincerely hope that AXIS continues its upward trajectory, achieving new milestones with each passing year and bringing honor to VNIT. My best wishes go out to AXIS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default AxisComponent;

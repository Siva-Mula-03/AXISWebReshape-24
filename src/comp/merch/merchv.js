import React from 'react';
import merchvid from './merchvid.mp4'
const Merch = () => {
  return (
    <div className="bg-white py-20 px-10 flex flex-col sm:flex-row items-center justify-between">
      <div className="max-w-md">
        <h1 style={{fontSize: "50px",whiteSpace: 'nowrap'}}>AXIS'24 Official Merchandise</h1>
        <p style={{fontSize: "30px"}}>
          <span style={{ whiteSpace: 'nowrap' }}>Embrace the AI era with our Official AXIS'24 Merchandise release!<br></br> <br></br>Just ₹300 to own a piece of the future.<br></br><br></br> Book your merch now!!</span>
        </p>
        <br></br>
        <button style={{fontSize:"30px"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Grab Now!
        </button>
      </div>
      <div className="max-w-md bg-white">
        <iframe
          style={{width:"1200px",height:"600px",marginLeft:"-1200px"}}
          src={merchvid}
          title="AXIS'24 Official Merchandise Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Merch;

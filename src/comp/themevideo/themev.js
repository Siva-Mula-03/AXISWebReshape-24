import React from 'react';
import { Color } from 'three';

const AxisThemeVideo = () => {
  return (
    <>
    <b><h1 style={{fontSize:"50px",textAlign:"center",backgroundColor:"white",margin:"0",height:"150px"}}>AXIS'24 THEME VIDEO</h1></b>
    <div className="p-30">
      <div className="aspect-w-full aspect-h-full">
        <iframe
          style={{width:"100%",height:"1000px",background:"white",marginLeft:"0px"}}
          src="https://www.youtube.com/embed/IXnmWNu6_4o"
          title="AXIS'24 Theme Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default AxisThemeVideo;

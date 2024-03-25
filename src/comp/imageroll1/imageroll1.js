import React, { useState, useEffect } from 'react';
import './imageroll1.css'; 

const ImageRoll1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('./1.png'),
    require('./2.png'),
    require('./3.png'),
    require('./4.png'),
    require('./5.png'),
    require('./6.png'),
    require('./7.png'),
    require('./8.png'),
    require('./9.png'),
    require('./10.png'),
  ];

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Automatically move to the next image every 3 seconds
    const interval = setInterval(nextImage, 1000);
    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <div className="image-roll-container">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index}`}
          className={`image-item ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default ImageRoll1;

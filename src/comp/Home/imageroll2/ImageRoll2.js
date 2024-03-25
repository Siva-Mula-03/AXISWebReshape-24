import React, { useState, useEffect } from 'react';
import './imageroll2.css'; 

const ImageRoll2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('./1p.png'),
    require('./2p.png'),
    require('./3p.png')
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
    <div className="new-image-roll-container">
      {images.map((imageUrl, index) => (
        <div key={index} className={`new-image-container ${index === currentImageIndex ? 'active' : ''}`}>
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageRoll2;

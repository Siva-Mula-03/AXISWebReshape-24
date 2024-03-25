import React, { useState, useEffect } from 'react';
import './imageroll3.css';

const ImageRoll3 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('./1c.png'),
    require('./2c.png'),
    require('./3c.png')
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="roll3-container">
      {images.map((imageUrl, index) => (
        <div key={index} className={`roll3-item ${index === currentImageIndex ? 'active' : ''}`}>
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageRoll3;

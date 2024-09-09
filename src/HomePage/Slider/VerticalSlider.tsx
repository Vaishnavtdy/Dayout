import React, { useState, useEffect } from 'react';
import './VerticalSlider.css';

interface VerticalSliderProps {
  slides: string[]; // Array of image URLs
  interval?: number;
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({ slides, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;

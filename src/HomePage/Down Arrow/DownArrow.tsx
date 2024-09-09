// src/components/DownArrow.tsx

import './DownArrow.css'; // Import a CSS file for styling
import Prefaces from '../preface/preface';





import React from 'react';

const DownArrow: React.FC = () => {
  const scrollToNextPage = () => {
    const nextPage = document.getElementById('Prefaces'); // Replace 'nextPage' with the actual ID of your next page element
    if (nextPage) {
      window.scrollTo({
        top: nextPage.offsetTop,
        behavior: 'smooth', // Use smooth scrolling for a nicer effect
      });
    }
  };

  return (
    <div className="down-arrow" onClick={scrollToNextPage}>
      {/* You can customize the down arrow icon or text here */}
      Scroll Down
    </div>
  );
};

export default DownArrow;

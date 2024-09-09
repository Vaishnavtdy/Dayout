// YourComponent.tsx
import React from 'react';
import HorizontalList from './ HorizontalList'; // Assuming you have this component
import './Reviews.css'; // Import the modified CSS file

const Reviews: React.FC = () => {
  const listItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="containerreview"> {/* Use the modified container class */}
      <label htmlFor="textFieldreview">Enter Text:</label>
      <br />
      <input type="text" id="textFieldreview" />
      <br />
      <label>Horizontal List:</label>
      <div className="horizontalListreview"> {/* Use the modified horizontalList class */}
        <HorizontalList items={listItems} />
      </div>
    </div>
  );
};

export default Reviews;

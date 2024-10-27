import React from "react";

const StarRating = ({ rating }: any) => {
  const maxStars = 5;

  // Function to render stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        // Full star for each whole number less than or equal to rating
        stars.push(
          <span key={i} style={{ color: "#FFD700" }}>
            ★
          </span>
        );
      } else if (i - rating <= 0.5) {
        // Half star if within 0.5 range
        stars.push(
          <span key={i} style={{ color: "#FFD700" }}>
            ⯪
          </span>
        );
      } else {
        // Empty star for remaining
        stars.push(
          <span key={i} style={{ color: "#ddd" }}>
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;

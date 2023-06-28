import React from "react";

const Rating = ({ rating, setRating, ratingHover, setRatingHover }) => {
  const renderStars = () => {
    const handleRatingClick = (value) => {
      setRating(value);
    };
    const handleMouseEnter = (value) => {
      setRatingHover(value);
    };
    const handleMouseLeave = () => {
      setRatingHover(0);
    };

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClassName =
        i <= (rating || ratingHover) ? "star active" : "star";
      stars.push(
        <button
          key={i}
          className={starClassName}
          onClick={() => handleRatingClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave(i)}
        >
          <span>&#9733;</span>
        </button>
      );
    }
    return stars;
  };
  return <>{renderStars()}</>;
};

export default Rating;

import { useState } from "react";

const StarRating = ({ value, onChange }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      <label>Rating: </label>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= (hover || value) ? "active" : ""}`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
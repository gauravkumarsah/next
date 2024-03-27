import React, { useState } from 'react';
import styles from './styles.module.css';

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const getStarClass = (i: number) => {
    return hover
      ? i < hover
        ? styles.active
        : ''
      : i < rating
      ? styles.active
      : '';
  };

  return (
    <div className={styles.ratingContainer}>
      {[...Array(5)].map((star, i) => {
        return (
          <label key={i + 1}>
            <span
              className={`${styles.star} ${getStarClass(i)}`}
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setHover(i + 1)}
              onMouseLeave={() => setHover(0)}
            >
              &#8902;
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;

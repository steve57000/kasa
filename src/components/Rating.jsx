import React from 'react';
import fullStar from '../assets/img/full_star.svg';
import emptyStar from '../assets/img/empty_star.svg';

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <img
          src={fullStar}
          alt="full-star"
          style={{ width: '32', height: '32' }}
          key={i}
        />,
      );
    } else {
      stars.push(<img src={emptyStar} alt="empty-star" key={i} />);
    }
  }

  return <div className="Rating">{stars}</div>;
};

export default Rating;

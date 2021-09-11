import React from 'react';
import { Rating } from 'semantic-ui-react';

const RatingElearn = ({ rate = 0, readWrite = false, onRate = null }) => (
 <span>
  <Rating
   icon="star"
   rating={Math.floor(rate)}
   maxRating={5}
   disabled={!readWrite}
   onRate={(e, data) => onRate(e, data)}
  />{' '}
  {rate.toFixed(1)}
 </span>
);

export default RatingElearn;

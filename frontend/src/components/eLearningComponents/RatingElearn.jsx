import React from 'react';
import { Rating } from 'semantic-ui-react';

const RatingElearn = () => (
 <span>
  <Rating icon="star" defaultRating={3} maxRating={5} disabled={true} />
  3.5
 </span>
);

export default RatingElearn;

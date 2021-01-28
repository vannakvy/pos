import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

const ProgressCourse = () => {
 return (
  <CircularSlider
   width={180}
   label="Progressing"
   hideKnob="true"
   knobDraggable="false"
   appendToValue="%"
   valueFontSize="1.7rem"
   min={0}
   max={100}
   dataIndex={20}
  />
 );
};

export default ProgressCourse;

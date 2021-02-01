import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

const ProgressCourse = ({ progress }) => {
 return (
  <CircularSlider
   width={180}
   progressColorFrom="#ff00c8"
   progressColorTo="#009c9a"
   label="Progressing"
   hideKnob="true"
   knobDraggable="false"
   appendToValue="%"
   valueFontSize="1.7rem"
   trackColor="#c0c0c0"
   min={0}
   max={100}
   dataIndex={progress}
  />
 );
};

export default ProgressCourse;

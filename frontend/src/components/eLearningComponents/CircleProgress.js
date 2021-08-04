import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
 return (
  <Box position="relative" display="inline-flex">
   <CircularProgress
    style={{ borderRadius: '5' }}
    variant="determinate"
    {...props}
   />
   <Box
    top={0}
    left={0}
    bottom={0}
    right={0}
    position="absolute"
    display="flex"
    alignItems="center"
    justifyContent="center"
   >
    <Typography
     className="ubuntu"
     style={{ fontSize: 10 }}
     variant="caption"
     component="p"
    >{`${Math.round(props.value)}`}</Typography>
   </Box>
  </Box>
 );
}

CircularProgressWithLabel.propTypes = {
 /**
  * The value of the progress indicator for the determinate variant.
  * Value between 0 and 100.
  */
 value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
 const { progressBar } = props;
 return <CircularProgressWithLabel value={progressBar} />;
}

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
 root: {
  width: '100%',
 },
});

const Progress = () => {
 const classes = useStyles();
 const [progress, setProgress] = useState(0);

 useEffect(() => {
  setProgress(100);
 }, [progress, setProgress]);

 return (
  <div className={classes.root}>
   <LinearProgress
    style={{ height: '5px' }}
    color="secondary"
    variant="determinate"
    value={progress}
   />
  </div>
 );
};

export default Progress;

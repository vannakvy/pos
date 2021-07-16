import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
 root: {
  width: '100%',
  height: '2px',
  position: 'fixed',
  // top: 72,
  zIndex: 10000,
 },
});

export default function LoaderTop() {
 const classes = useStyles();
 const [progress, setProgress] = React.useState(0);
 const [open, setOpen] = useState(false);

 const loaderTop = useSelector((state) => state.loaderTop);
 const { loaderTop: loadT } = loaderTop;

 React.useEffect(() => {
  if (loadT) {
   setOpen(true);
   setProgress(0);
   const timer = setInterval(() => {
    setProgress((oldProgress) => {
     const diff = Math.random() * 30;
     return Math.min(oldProgress + diff, 95);
    });
   }, 100);

   return () => {
    clearInterval(timer);
   };
  } else {
   setProgress(100);
   setTimeout(() => {
    setOpen(false);
   }, 200);
  }
 }, [loadT]);

 return (
  <div className={classes.root}>
   {open ? (
    <LinearProgress
     style={{ height: '2px', background: 'transparent' }}
     color="secondary"
     variant="determinate"
     value={progress}
    />
   ) : null}
  </div>
 );
}

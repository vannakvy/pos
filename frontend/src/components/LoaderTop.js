import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
 root: {
  width: '100%',
  height: '2px',
  position: 'sticky',
  top: 72,
  zIndex: 10,
 },
});

export default function LoaderTop() {
 const classes = useStyles();
 const [progress, setProgress] = React.useState(0);
 const [open, setOpen] = useState(false);

 const loaderTop = useSelector((state) => state.loaderTop);
 const { loaderTop: loading } = loaderTop;

 React.useEffect(() => {
  if (loading) {
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
   setOpen(false);
  }
 }, [loading]);

 return (
  <div className={classes.root}>
   {open ? (
    <LinearProgress
     style={{ height: '2px' }}
     color="secondary"
     variant="determinate"
     value={progress}
    />
   ) : null}
  </div>
 );
}

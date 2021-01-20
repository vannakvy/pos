import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 root: {
  display: 'flex',
  flexDirection: 'column',
  '& > * + *': {
   marginTop: theme.spacing(1),
  },
 },
}));

const RatingBar = ({ size }) => {
 const classes = useStyles();

 return (
  <div className={classes.root}>
   <Rating name="size-small" defaultValue={2} size={size} readOnly />
  </div>
 );
};

export default RatingBar;

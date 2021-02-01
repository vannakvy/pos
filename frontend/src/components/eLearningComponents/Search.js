import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
 search: {
  padding: '5px',
  boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 1),
  '&:hover': {
   backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  maxWidth: '380px',
  [theme.breakpoints.up('sm')]: {
   marginLeft: theme.spacing(2),
   width: 'auto',
  },
 },
 searchIcon: {
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  top: '12px',
  pointerEvents: 'none',
  display: 'flex',
  justifyContent: 'center',
 },
 inputRoot: {
  color: 'inherit',
 },
 inputInput: {
  fontFamily: `myriad-pro, Lucida Grande, Arial, 'Kantumruy', 'Siemreap',
  sans-serif`,
  fontWeight: 'bold',
  fontSize: '14px',
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
   width: '100%',
  },
 },
}));

const Search = ({ dispatch, SearchCourses }) => {
 const classes = useStyles();
 const [keyword, setKeyword] = useState('');
 const onSubmitHandler = (e) => {
  e.preventDefault();
  dispatch(SearchCourses(keyword));
 };

 const onChangeTest = (e) => {
  const { value } = e.target;
  setKeyword(value);
  dispatch(SearchCourses(value));
 };

 return (
  <>
   <div className={classes.search}>
    <form onSubmit={onSubmitHandler}>
     <div className={classes.searchIcon}>
      <SearchIcon />
     </div>
     <InputBase
      name="keyword"
      // onChange={(e) => setKeyword(e.target.value)}
      onChange={onChangeTest}
      placeholder="ឈ្មោះមុខវិទ្យា..."
      className="kh"
      classes={{
       root: classes.inputRoot,
       input: classes.inputInput,
      }}
     />
     <input
      type="submit"
      className="btn btn-sm position-relative rounded kh"
      value="ស្វែងរក"
      style={{ bottom: '2px' }}
     />
    </form>
   </div>
  </>
 );
};

export default Search;

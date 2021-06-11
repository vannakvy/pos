import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';

const Search = () => {
 const history = useHistory();
 const [keyword, setKeyword] = useState('');
 const onSubmitHandler = (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
  history.push(`/elearning/courses/search/page/1?keyword=${keyword}`);
 };

 const onChangeTest = (e) => {
  const { value } = e.target;
  setKeyword(value);
  window.scrollTo(0, 0);
  history.push(`/elearning/courses/search/page/1?keyword=${value}`);
 };

 return (
  <>
   <form className="d-flex" onSubmit={onSubmitHandler}>
    <input
     className="form-control rounded shadow-sm _bg-light mr-1 kh font-weight-bold"
     style={{ width: 270 }}
     type="text"
     placeholder="ស្វែងរកមុខវិទ្យា"
     onChange={onChangeTest}
    />
    <button
     className="btn btn-secondary btn-sm rounded shadow-sm _bg-light d-none"
     type="submit"
    >
     <GoSearch className="" style={{ fontSize: 16 }} />
    </button>
   </form>
  </>
 );
};

export default Search;

import React, { useEffect, useState } from 'react';
import $ from 'jquery';

const ConvertNum = ({ num }) => {
 const [s, setS] = useState(0);

 useEffect(() => {
  setS(num);
 }, [num]);

 function toEnNumber(inputNumber2) {
  if (inputNumber2 == undefined) return '';
  var str = $.trim(inputNumber2.toString());
  if (str == '') return '';
  str = str.replace(/0/g, '០');
  str = str.replace(/1/g, '១');
  str = str.replace(/2/g, '២');
  str = str.replace(/3/g, '៣');
  str = str.replace(/4/g, '៤');
  str = str.replace(/5/g, '៥');
  str = str.replace(/6/g, '៦');
  str = str.replace(/7/g, '៧');
  str = str.replace(/8/g, '៨');
  str = str.replace(/9/g, '៩');
  return str;
 }

 return (
  <>
   <span className="kh">{toEnNumber(num && num)}</span>
  </>
 );
};

export default ConvertNum;

import React, { useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import $ from 'jquery';

const Duration = ({ itemDate }) => {
 const [d, setD] = useState('');

 function toKhNumber(inputNumber2) {
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

 useEffect(() => {
  // const dat1 = new Date(itemDate);
  // const dat2 = new Date();
  const date1 = itemDate;
  const date2 = new Date().getTime();

  const min = Math.floor(getDifferenceInMinutes(date1, date2));
  const hour = Math.floor(getDifferenceInHours(date1, date2));
  const day = Math.floor(getDifferenceInDays(date1, date2));
  const week = Math.floor(day / 7);
  const month = Math.floor(week / 4);

  if (min <= 0) {
   setD('អម្បាញ់មិញ');
  } else if (min < 60) {
   setD(toKhNumber(min) + ' នាទីមុន');
  } else if (hour < 24) {
   setD(toKhNumber(hour) + ' ម៉ោងមុន');
  } else if (day < 7) {
   setD(toKhNumber(day) + ' ថ្ងៃមុន');
  } else if (week < 4) {
   setD(toKhNumber(week) + ' សប្តាហ៍មុន');
  } else if (month < 12) {
   setD(toKhNumber(month) + ' ខែ​មុន');
  } else {
   setD(dateFormat(itemDate));
  }

  function getDifferenceInDays(date1, date2) {
   const diffInMs = Math.abs(date2 - date1);
   return diffInMs / (1000 * 60 * 60 * 24);
  }

  function getDifferenceInHours(date1, date2) {
   const diffInMs = Math.abs(date2 - date1);
   return diffInMs / (1000 * 60 * 60);
  }

  function getDifferenceInMinutes(date1, date2) {
   const diffInMs = Math.abs(date2 - date1);
   return diffInMs / (1000 * 60);
  }

  function getDifferenceInSeconds(date1, date2) {
   const diffInMs = Math.abs(date2 - date1);
   return diffInMs / 1000;
  }
 }, []);

 return <span className="kh">{d}</span>;
};

export default Duration;

/*
Author : Giuseppe Compagnone
Date : 07/12/2021
*/


function telephoneCheck(str) {
  let regex = /(^1{0,1}\s*(\(\d{3}\))|^1{0,1}\s*(\d{3}))[\s-]*\d{3}[\s-]*\d{4}$/ig;


  if(!str.match(regex))return false;


  return true;
}

console.log(telephoneCheck("1 555-555-5555)"));
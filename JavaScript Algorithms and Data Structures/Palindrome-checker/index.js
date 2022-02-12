/*
Author : Giuseppe Compagnone
Date : 07/12/2021
*/

function palindrome(str) {
  let regex= /[a-z0-9]/ig;
  str=str.toLowerCase();
  let ss=str.match(regex);
  str=ss.join("");
  let rev=[];
  for(let i=0;i<ss.length;i++){
    rev.unshift(ss[i]);
  }
  return str===rev.join("");
}

console.log(palindrome("eye"));
/*
Author : Giuseppe Compagnone
Date : 09/12/2021
*/
function convertToRoman(num) {
 
 if(num === 0){
   return "";
 }
 
 let dic = {
   1:"I",
   4:"IV",
   5:"V",
   9:"IX",
   10:"X",
   40:"XL",
   50:"L",
   90:"XC",
   100:"C",
   400:"CD",
   500:"D",
   900:"CM",
   1000:"M"
 }

if(dic.hasOwnProperty(num)){
  return dic[num];
}

let res = "";
let keys = Object.keys(dic);

for(let i = keys.length-1;i>=0;i--){
  if(num>keys[i]){


    return dic[keys[i]] + convertToRoman(num-keys[i]);
  }
}


 
  
}

console.log(convertToRoman(2014));
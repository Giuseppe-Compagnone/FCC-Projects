/*
Author : Giuseppe Compagnone
Date : 21/12/2021
*/

function rot13(str) {
    str=str.split("");
    let regex= /[A-Z]/g;
    

    for(let i=0;i<str.length;i++){
      if(!str[i].match(regex)){
        continue;
      }
      str[i]=String.fromCharCode((str[i].charCodeAt(0)-65+13)%26+65); 
      console.log(str[i]);
    }
    return str.join("");
}



console.log(rot13("SERR PBQR PNZC"));

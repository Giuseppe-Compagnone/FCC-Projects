/*
Author : Giuseppe Compagnone
Date : 21/12/2021
*/

function checkCashRegister(price, cash, cid) {
  let change={
    status : "",
    change: [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]],
  };
  let dic={
    penny:0.01,
    nickel:0.05,
    dime:0.1,
    quarter:0.25,
    one:1,
    five:5,
    ten:10,
    twenty:20,
    "one hundred":100,
  };

  let sum = 0;

  for(let i=0;i<cid.length;i++){
    sum += cid[i][1];
  }

  


  let key = Object.keys(dic);

  let num = [];  
  for(let i=0;i<cid.length;i++){
    num[i]=Math.round(cid[i][1]/dic[cid[i][0].toLowerCase()]);
  }


  

  let ch = cash - price;

  if(sum<ch){
    change.status="INSUFFICIENT_FUNDS";
    change.change=[];
    return change;
  }
  if(sum==ch){
    change.status="CLOSED";
    change.change=cid;
    return change;
  }
  if(sum>ch){
    change.status="OPEN";
  }

    

  for(let i=cid.length;i>=0;i--){
    while(true){      
      if(ch-dic[key[i]]>=0 && num[i]>0){
        change.change[i][1]+=dic[key[i]];
        num[i]--;
        ch=(ch-dic[key[i]]).toFixed(2);         
        

      }
      else{
        break;
      }
    }
  }


  if(ch!=0){
    change.status = "INSUFFICIENT_FUNDS"
    change.change = [];
    return change;
  }

  let hold=[]

  for(let i=0;i<cid.length;i++){
    if(change.change[i][1]!=0){
      hold.unshift(change.change[i]); 
    }

    
  }

  change.change=hold;
 

  return change;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

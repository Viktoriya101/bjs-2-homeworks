"use strict"
function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let arr = [];
  if(d == 0){
    let r = -b / (2 * a);
    arr.push(r);
  } else if(d > 0) {
    let r1 = (-b + Math.sqrt(d)) / (2 * a);
    let r2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(r1, r2);
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let bodyLoan = amount - contribution;
  let payment = bodyLoan * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent), countMonths) - 1)));
return Number((payment * countMonths).toFixed(2));;
}
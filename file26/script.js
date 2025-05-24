// Standard:

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 
console.log(bills, tips);
// You can also use an arrow function for calcTip if you prefer that

const calccTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


// With Bonus:

const calcccTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 
const bills1 = [125, 555, 44];
const tips1 = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
 
console.log(bills, tips, totals);

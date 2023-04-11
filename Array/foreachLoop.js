'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, val] of movements.entries()) {
  if (val > 0) console.log(`Move ${i + 1} : Deposit amount is : ${val}`);
  else console.log(`Move ${i + 1} : Withdraw amount is : ${Math.abs(val)}`);
}
// for each loop
// break and continue dos't work
console.log('///////for each/////');
movements.forEach(function (val, index, arr) {
  if (val > 0) console.log(`Move ${index + 1} : Deposit amount is : ${val}`);
  else console.log(`Move ${index + 1} : Withdraw amount is : ${Math.abs(val)}`);
});

/////////////////////////////////////////////////

// Map in for each

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, fullmap) {
  console.log(`${key} : ${value}`);
});

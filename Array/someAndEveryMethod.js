'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

console.log(movements.includes(-130));
console.log(movements.some(mov => mov > 0));
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov >= 0));
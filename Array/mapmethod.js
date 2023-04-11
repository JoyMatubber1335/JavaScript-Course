'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurtoUsd = 1.1;

// const ConvertUsd = movements.map(function (mov) {
//   return mov * eurtoUsd;
// });

const ConvertUsd = movements.map(mov => mov * eurtoUsd); // arrow f unction same one previous function
console.log(ConvertUsd);
const description = movements.map(
  (mov, index) =>
    `Move ${index + 1} :  ${
      mov > 0 ? ' You Deposit' : ' You Withdraw'
    } ${Math.abs(mov)}`
);
console.log(description);

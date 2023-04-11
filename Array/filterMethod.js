'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const diposits = movements.filter(
  // filter method
  function (
    mov // call back function
  ) {
    return mov > 0;
  }
);
console.log(movements);
console.log(diposits);

const withdrawa = movements.filter(mov => mov < 0);
console.log(movements);
console.log(withdrawa);


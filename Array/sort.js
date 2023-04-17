'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.sort()); // for string  not work number int

// assending  sort // 100 300 -300
// return > 0 a,b // as our call back comp ruls
// return <0 b,a
movements.sort(
  (a, b) => a - b

  //   if (a > b) return 1;
  //   if (b > a) return -1;
);
//decindiang
movements.sort(
  (a, b) => b - a
  //   if (a < b) return 1;
  //   if (b < a) return -1;
);
console.log(movements);

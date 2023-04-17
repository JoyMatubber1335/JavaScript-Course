'use strict';

console.log(2 ** 53 - 1); // max safly nuber in JS
console.log(Number.MAX_SAFE_INTEGER); // er besi hole thik moto kaj kore na
console.log(12313412342413412342345324534345345645656745n); // n convert regular number to   bigInt number
console.log(BigInt(1212112121));
const n = 100000000000000000000000000000000000000000n;
const m = 111111111111111111111111111111111111111111111n;
const ans = n * m;
console.log(ans);
console.log(11 / 3); // this is regular number
console.log(10n / 3n); // it alwyes return int value , for BigInt number
console.log(11n / 3n);
console.log(12n / 3n);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// flat and flatmap

// const allMovsrr = accounts.map(acc => acc.movements);
//
// const allmov = allMovsrr.flat();
// console.log(allmov);
// const allMovSum = allmov.reduce((acc, mov) => acc + mov, 0);
// console.log(allMovSum);

// const allInOne = accounts
// .map(acc => acc.movements)
// .flat(1)
// .reduce((sum, cur) => sum + cur, 0);
// console.log(allInOne);
//
// const allInOne1 = accounts
// .flatMap(acc => acc.movements) // instand of use map and flat we uise flatMap
// .reduce((sum, cur) => sum + cur, 0);
// console.log(allInOne1);
//

//############## Practies ######################
//NO1: add all movment sum

const sumAllDepoMov = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((sum, mov) => sum + mov, 0);
console.log(sumAllDepoMov);
// NO2:Diposit at least 1000
let count = 0;
const DipoCuont = accounts
  .map(acc => acc.movements)
  .flat()
  .forEach(move => (move >= 1000 ? count++ : count));
console.log(count);

const { Dipo, Withd } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      sum[cur > 0 ? 'Dipo' : 'Withd'] += cur;
      return sum;
    },
    { Dipo: 0, Withd: 0 }
  );
console.log(Dipo, Withd);

// title var setup

// const titletext = function (title) {
// const text = [
// 'a',
// 'the',
// 'an',
// 'and',
// 'but',
// 'or',
// 'on',
// 'in',
// 'with',
// 'was',
// ];
// const titleReady = title
// .toLowerCase()
// .split(' ')
// .map(str =>
// text.includes(str) ? str : str[0].toUpperCase() + str.slice(1)
// )
// .join(' ');
// return titleReady;
// };
// console.log(titletext('my name is a JOY i was passed bsc '));
//
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);
  //
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  //
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');
  //
  return capitzalize(titleCase);
};
//
console.log(convertTitleCase('this is a nice title'));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// convert string to number
let x = '23';
console.log(x); // string
console.log(+x); // number
// parsing

let y = ' 12.5px ';
console.log(Number.parseInt(y));
console.log(Number.parseFloat(y));
// reminder

const evenodd = n => (n % 2 ? 'odd' : 'even');
console.log(evenodd(6));

// set Interval

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

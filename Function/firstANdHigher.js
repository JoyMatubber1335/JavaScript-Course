'use strict';

const function1 = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const function2 = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const function3 = function (str, fun) {
  // functin 3 is the higher order function so that ir recive another function as a perametr
  console.log(`Orginal function is :  ${str}`);
  console.log(`The convert Function is : ${fun(str)}`);
  console.log(`the convter is: ${fun.name}`); // fun.name == reeturn the function name
};
//
function3('joy matubber ', function2);

// function inside function

const f1 = function (str) {
  return function (str2) {
    console.log(`${str}  and ${str2}`);
  };
};

const fun = f1('joy');
fun('Matubber ');
console.log(2 + 5 + '8');
//

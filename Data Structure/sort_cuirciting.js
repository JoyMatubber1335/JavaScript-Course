'use strict';
// for OR first it check that the first one is true valu or not
// if then instead print it not check rest one , other wise check next one in or condition
console.log(3 || 'joy'); //
console.log(0 || 'joy');

// for and if it get falsy value then print it imedite
console.log(undefined && 0); //print undefine
console.log('joy' && 0 && undefined); // first get 0 ans =0;
console.log('joy' && 'rana' && 'rakib'); // if both are truth value print last one
//
// handle nullish value : it convert 0 and '' falsy value to truty value
let v;
let a = 0;
console.log(v ?? 23); // undefine handle kore na so print undefine
console.log(a ?? 23); // 0  ke convert kore  0
console.log('' ?? 23); // '' o kaj kore

// Assign ment Operator almost same as sort_cuircting

//--------OR-----------

const obj1 = {
  name: 'joy',
  age: 23,
};
const obj2 = {
  name: 'rana',
  dep: 'cse',
  age: 0,
};

obj1.age = obj1.age || 10; // use sort but we use operator
console.log(obj1.age);
obj1.age ||= 10; // use Or operator
console.log(obj1.age);
// const o1= obj1.age||=10;

obj2.age = obj2.age && 10;
console.log(obj2.age);
obj2.age &&= 23;
console.log(obj2.age);
// for nulish handle
console.log('Nulish');
obj2.age = obj2.age ?? 23;
console.log(obj2.age);
obj2.age ??= 23;
console.log(obj2.age);

'use strict';

const Person = function (name, cgpa) {
  this.name = name;
  this.cgpa = cgpa;
};
const info = new Person('joy', 3.97);
console.log(info);

const arr = [1, 2, 1, 2, 1, 2, 3, 4, 4, 4, 5, 5];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

//prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
// regular function
const un = function (ar) {
  return [...new Set(ar)];
};
console.log(un(arr));
console.dir(x => x + 1); //display information about the function object  such as name , no of argument etc

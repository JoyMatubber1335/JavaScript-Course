'use strict';
// console.log('ki vai ');
// const Name = 'joy Matubber ';
// first();
// function first() {
//   const age = 30;
//   second();
//   function second() {
//     const cgpa = 4;
//     if (age >= 23) {
//       let good = 'good';
//       console.log(
//         `My Name is ${Name}, I am a ${age} yers old and my cgps is ${cgpa} is too ${good} `
//       );
//     }
//   }
// }

const info = {
  Name: 'joy matubber',
  age: 23,
  dep: 'cse',
  method1: function () {
    console.log(this.age);
    const self = this; // use self keyword to instend of this
    const method2 = function () {
      console.log(self.Name);
    };
    method2();
  },

  arrow: () => {
    const self = this;
    console.log(self.dep);
  },
};

info.method1();
info.arrow(); // awwor function dosn't get the this value instance
//arguments
const arg = function () {
  let ans = 0;
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    ans += arguments[i];
  }
  console.log(ans);
};
arg(1, 2, 3, 5, 5);

// PRIMITIVE AND OBJECT

//premative
let a = 12;
let b = a;
a = 15;
console.log(a);

const n = {
  name: 'joy',
};
const nn = n;
nn.name = 'rana';
console.log(`nn name : ${nn.name}`);
console.log(`n name : ${n.name}`);

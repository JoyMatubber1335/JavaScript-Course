'use strict';

const air1 = {
  airname: 'joy',
  coach: 'LH',
  booking: [],
  book(fligtNum, name) {
    console.log(`${name} book ${this.airname} and ${this.coach} ${fligtNum}`);
    this.booking.push({ flight: `${this.coach} ${fligtNum} ,name` });
  },
};
air1.book(123, 'joy Matubber ');

const air2 = {
  name: 'rana',
  coach: 'mh',
  booking: [],
};
const book = air1.book;
//does not work
// book(23,"matubber ")
book.call(air2, 23, 'rana khan  '); // this keyword er poribotte use kora hoy call

book.call(air1, 33, 'Mery cupper');

// bind method
// menualy set this keyword for any functin call
// const bookAir1 = book.bind(air1);
// const bookAir2 = book.bind(air2);
// bookAir1(23, 'rana matubber'); // no neec to this keyword
// const bookAir123 = book.bind(bookAir1, 23);
// bookAir123('rabbi hossian');

//ommediately invoked function
// function call one time never call again  async wait
const runsOns = function () {
  console.log('never clll again');
};
runsOns();
// iife
(function () {
  // decliar function not run again
  console.log('run never again');
})();
(() => console.log('not run again '))(); // arow function iife

//%%%%%%%%%%%%%%

//Cluser

const closer = function () {
  let count = 0;
  return function () {
    count++;
    console.log(`${count} number `);
  };
};
const obj = closer();
obj();
obj();
//example 1



let f;
const g = function () {
  let a = 10;
  f = function () {
    console.log(`a = ${a}`);
  };
};

const h = function () {
  let b = 20;
  f = function () {
    console.log(`b = ${b}`);
  };
};
g();
f();
h();
f();


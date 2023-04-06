'use strict';
console.log('ki vai ');
const Name = 'joy Matubber ';
first();
function first() {
  const age = 30;
  second();
  function second() {
    const cgpa = 4;
    if (age >= 23) {
      let good = 'good';
      console.log(
        `My Name is ${Name}, I am a ${age} yers old and my cgps is ${cgpa} is too ${good} `
      );
    }
  }
}

'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderMenu: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // create object
  ordeDelivery: function (
    { starterIndex, mainIndex, time, address } // we also set default set the default value like time=12
  ) {
    console.log(`Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      
      address is ${address}and time is  ${time}`);
  },
};
//c
console.log(':og');

const quiz = new Map([
  ['question', 'What is thee bset'],
  [1, 'c'],
  [2, 'c++'],
  [3, 'js'],
  [4, 'dot net'],
  [true, 'currect'],
  [false, 'try  Again '],
]);
console.log(quiz);

// convert object into map

const hmap = new Map(Object.entries(restaurant.openingHours));
console.log(hmap);

console.log(quiz.get('question'));
for (let [key, value] of quiz) {
  if (typeof key === 'number') {
    console.log(`Answer  ${key} : ${value}`);
  }
}
let count = 0;
while (true) {
  const ans = Number(prompt('What is The answer'));

  if (ans === 3) {
    console.log(quiz.get(true));
    break;
  } else {
    console.log(quiz.get(false));
    count++;
  }
}

console.log(count);
let Score = 100 - count * 25;
console.log(`Your Score is : ${Score} %`);
// console.log();
console.log(typeof undefined ==typeof null);
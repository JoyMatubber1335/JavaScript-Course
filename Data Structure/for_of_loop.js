'use strict';

const openingHours = {
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
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //es6 enhanced object

  // create object
  openingHours,
  orderPasta: function (n1, n2, n3) {
    console.log(`Hare are the all pasta ${n1}, ${n2} and ${n3}`);
  },
};

let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);
// print only value
for (let i of menu) {
  console.log(i);
}

// print value with index

for (let [ind, val] of menu.entries()) {
  // hare ind = index and val indicate value
  // index is start 0
  console.log(`${ind + 1} : ${val} `);
}
//opening chaning
console.log('ok');
// console.log(restaurant.openingHours.mon.open); // give an error
// with optional chaining
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
for (let day of days) {
  console.log(restaurant.openingHours?.[day]?.open ?? 'closed');
}
const openday = Object.keys(openingHours);
console.log(openday);
let openStr = `We are open on ${openday.length} days`;
for (const day of Object.keys(openingHours)) {
  openStr += ` ${day} `;
}
console.log(openStr);
//Entries Object
const entries = Object.entries(openingHours);
console.log(entries);
// devide value into open and close on entries
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} open at ${open} and close at ${close}`);
}

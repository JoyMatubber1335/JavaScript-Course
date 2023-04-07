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

  // create object

  orderPasta: function (n1, n2, n3) {
    console.log(`Hare are the all pasta ${n1}, ${n2} and ${n3}`);
  },
};
///call own cretating object
// const pasta = [prompt('pasta 1'), prompt('pasta 2'), prompt('pasta 3')];
// console.log(pasta);
// restaurant.orderPasta(...pasta);

//get one value in object and chnag it

const newResturent = { ...restaurant };
newResturent.name = "Joy's Cafe";
console.log(newResturent.name);

let array = [3, 4, 5, 6];
let newArray = [1, 2, ...array];
console.log(...newArray);

let newMenu = [...restaurant.mainMenu, 'Burger', 'roll']; // add new elemet in resturent  menu  using spred
// restaurant.mainMenu = newMenu;

console.log(newMenu);
console.log(...restaurant.mainMenu);
// join two array
let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// also do spred in string

let name = 'JoyMatubber ';
console.log(...name);

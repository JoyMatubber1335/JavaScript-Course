'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
   ordeDelivery: function({starterIndex,mainIndex,time,address}) // we also set default set the default value like time=12
   {
    console.log(`Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    
    address is ${address}and time is  ${time}`);
   }
};
//call object 
  restaurant.ordeDelivery(
    {
      time:"12Am",
      address:"dhaka",
      mainIndex:2,
      starterIndex:2,
    }
  );

// obejct destructing

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// also we use new name as a peramiter

const {name:restuname}=restaurant;
console.log(restuname);

// set default value

const {menu="joy",name:rename}=restaurant; // set meny = joy as a default  
console.log(menu,rename);

//mutating variable we use full code into ()

let a=20;
let b=23;
const obj= {a:3,b:4};
({a,b}=obj); // use ()
console.log(a,b);

// destruction nestend object

const {fri:{open:o,close:c}}=openingHours;
console.log(o,c);





// let [main, , secondary] = restaurant.categories; // destructraing 1,3 element in using ,,
// console.log(main, secondary); //

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// console.log('ok');

// recive valu from function
let [main, secondary] = restaurant.orderMenu(2, 1); // destruction using function
console.log(main, secondary);
// Destructing array inside array

const nestedArray = [1, 2, [3, 4]];

const [i, j, [k, l]] = nestedArray; // all value
const [i1, , [, l1]] = nestedArray; // 1 st array 1st index , 2nd array 2nd index
console.log(i, j, k, l);
console.log(i1, l1);

// default value destructing

const de = [11, 22];
const [d, f, ll = 1] = de;
console.log(d, f, ll);

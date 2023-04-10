'use strict';

// create set
let mySet = new Set([1, 3, 2, 1, 2, 5, 6, 5]);
console.log(mySet);

// size
console.log(mySet.size);

// check the elemetn is exist in set or not  return true false
console.log(mySet.has(3));
console.log(mySet.has(4));

//add edelemt in set
mySet.add(4);
console.log(mySet);
console.log(mySet.size);

// delete element in

mySet.delete(1);
console.log(mySet);
console.log(mySet.size);
console.log('');
// pritn all value

for (let i of mySet) {
  console.log(i);
}
// convert set into array

const uniqe = [...mySet];
console.log(uniqe);
// object under set
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add('some text'); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);
console.log(mySet1);
console.log(mySet1.size);
// set with string
const name = 'joy Matubber';
const nameSet = new Set(name);
console.log(nameSet);

console.log('');

console.log('1st');
for (const item of mySet1) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
console.log('2nd');
for (const item of mySet1.keys()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
console.log('3rd');
for (const item of mySet1.values()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// key and value are the same here
console.log('4th');
for (const [key, value] of mySet1.entries()) {
  console.log(key); // ekhne value dibo na karon set er kno index thake na
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// Convert Set object to an Array object, with Array.from

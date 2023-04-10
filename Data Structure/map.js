'use strict';

const info = new Map();
// insert value
info.set('name', 'joy');
info.set('age', 23);
info.set(1, 'one');
console.log(info);
// insert  multiple valu  at a time
info.set('subject', ['math', 'cs', 'eng']).set('Dep', 'cse').set(2, 35);
console.log(info);

// take specific key wise value
console.log(info.get('name'));
console.log(info.get(2));
// for (let i of info) {
//   console.log(i);
// }

// check the key  is exist or not
console.log(info.has('name'));

// delete key  to map

info.delete(1);
console.log(info);

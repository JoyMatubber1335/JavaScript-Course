const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2)); //c,d,e
// console.log(arr); //a,b,c,d,e
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, -1)); // slice every thing except last one

//SPLICE
console.log('splice');
console.log(arr); //a b c d e
console.log(arr.splice(1, 3));  //bcd
console.log(arr);
// console.log(arr.splice(2)); // c,d,e
// console.log(arr); // a,b
arr.splice(-1); // delete last index
// console.log(arr);
console.log(arr);

//%%%%%%%%%%%REVERSE55544444$$$$$$$

const arr1 = ['f', 'g', 'h', 'i', 'j'];
const arr2 = ['k', 'l', 'm'];
console.log(arr1.reverse(arr1));
console.log(arr1); // chnage the orginal one
// concate

console.log(arr1.concat(arr2)); // dosent

// join
const later = arr1.concat(arr2);

console.log(later.join('->'));
console.log(arr1.at(0));

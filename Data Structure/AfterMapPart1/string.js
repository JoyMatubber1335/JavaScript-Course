'use strict';
const Name = 'Md Joy Matubber';
console.log(Name[0]);
console.log(Name.length);
console.log(Name.indexOf('J'));
console.log(Name.lastIndexOf('b'));

//substring
// use slice
console.log(Name.slice(3, 6)); //1st one include last one exclude

console.log(Name.slice(0, Name.indexOf(' ')));

console.log(Name.slice(Name.indexOf(' ') + 1, Name.length));
// substring of last  thike

console.log(Name.slice(-2));
console.log(Name.slice(0, -1));
console.log(Name.slice(-1));

console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

const nn = 'sAyEm';
const nn2 = nn.toLowerCase(nn);
const CorrecNN = nn2[0].toUpperCase() + nn2.slice(1, nn2.length);
console.log(CorrecNN);

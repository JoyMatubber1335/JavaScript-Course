'use strict';

// const private ="joy";
// console.log(private);

// function car()
// {
//     console.log("Car has a wheel");
// }
// car();

// function food(applle,mango)
// {
//     console.log(applle,mango);
//     const juce =`${applle} is a ${mango}`;
//     return juce;
// }
// console.log(food(2,3));

// const value = function(number)
// {
//    const nm= `the numhber is ${number}`;
//    return nm;

// }

// const nn= value(23);
// console.log(nn);

// const information = (bio,bio1 )=>
// {
//     const add=4+bio;
//     const sub=8-bio1;
//     console.log(add);
//      console.log(sub);
//     // return add;
// }
//information(2,3);


// function factorial(n)
// {
//     if(n > 1)
//     return n*factorial(n - 1);
//   else
//     return 1;
// }
// console.log(factorial(5));


//array
 
const info =['joy', 'matubber ',' rana',23,33.44];
console.log(info.length);
console.log(info[3]);

// add elemtn in array 

info.push("tusar");  // add last 
console.log(info);
info.unshift("lisun");   // add first 
console.log(info);
// delete element 
info.pop();
console.log(info);
info.shift();
console.log(info);

console.log(info.includes("joy"));
console.log(info.includes("sumaiya "));

let n=5;
const checkmax=[1,6,3,8,4,7];
let ma=checkmax[0];
for(let i=0;i<checkmax.length;i++)
{
    if(checkmax[i]>ma)
    {
        ma=checkmax[i];

    } 
}
console.log(ma);
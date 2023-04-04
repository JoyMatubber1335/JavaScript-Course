'use strict';

// const private ="joy";
// console.log(private);

function car()
{
    console.log("Car has a wheel");
}
car();

function food(applle,mango)
{
    console.log(applle,mango);
    const juce =`${applle} is a ${mango}`;
    return juce;
}
console.log(food(2,3));

const value = function(number)
{
   const nm= `the numhber is ${number}`;
   return nm;

}

const nn= value(23);
console.log(nn);

// const information = (bio,bio1 )=>
// {
//     const add=4+bio;
//     const sub=8-bio1;
//     console.log(add);
//      console.log(sub);
//     // return add;
// }
//information(2,3);


function factorial(n)
{
    if(n > 1)
    return n*factorial(n - 1);
  else
    return 1;
}
console.log(factorial(5));
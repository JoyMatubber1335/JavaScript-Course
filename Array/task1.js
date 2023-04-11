'use strict';

const Juliya = {
  dogAge: [2, 3, 1, 4, 6],
};

const kata = {
  dogAge: [1, 3, 2, 4, 5],
};

const checkDogs = function (arrJuliya, arrKata) {
  arrJuliya.splice(-2);
  const newarrayJuliya = arrJuliya.splice(1);
  const allDogs = newarrayJuliya.concat(arrKata);
  console.log(allDogs);
  allDogs.forEach(function (value, key) {
    let type = value >= 3 ? 'Adult' : 'Still Puppy🐶';
    console.log(`Doog Number is ${key+1} , ia an ${type} and age is ${value}`);
  });

  console.log(newarrayJuliya);
};
checkDogs(Juliya.dogAge, kata.dogAge);

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
    console.log(
      `Doog Number is ${key + 1} , ia an ${type} and age is ${value}`
    );
  });

  console.log(newarrayJuliya);
};
checkDogs(Juliya.dogAge, kata.dogAge);
// task 2

const Juliya2 = {
  dogAge: [2, 3, 1, 4, 6],
};

const kata2 = {
  dogAge: [1, 3, 2, 4, 5],
};
console.log('####### task 2 %%%%%%%');

const calHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const adultage = humanAge.filter(age => age >= 18);
  const avgAge =
    adultage.reduce((age, i) => age + i, humanAge[0]) / adultage.length;
  console.log(avgAge);
};
calHumanAge(kata2.dogAge);
calHumanAge(Juliya2.dogAge);

console.log('#### TASK 3 ##########');

const calvgHumanAge = function (ages) {
  const avgage = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((sum, age, i, arr) => sum + age / arr.length, 0);
  console.log(avgage);
};
calvgHumanAge([4, 2, 5, 1, 15, 8, 3]);
calvgHumanAge(Juliya2.dogAge);

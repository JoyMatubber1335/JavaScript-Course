'use strict';
// defalut function
const infos = [];

const createinfo = function (Name, age = 20, cgpa = age / 5) {
  const obj = {
    // object
    Name,
    age,
    cgpa,
  };
  console.log(obj);
  infos.push(obj);
};

createinfo('joy');
createinfo(undefined, 23, 3.97);
createinfo('joy');

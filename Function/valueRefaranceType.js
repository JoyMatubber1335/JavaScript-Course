'use strict';

const age = 23;
const info = {
  Name: 'joy',
  roll: 121,
};

const infos = function (name, age) {
  info.Name = 'mr.' + info.Name;
  age = 20;
  if (info.roll === 121) {
    alert('Oke Currect ');
  } else {
    alert('No , not Currect ');
  }
};
infos(info, age);
console.log(info, age);
console.log(age);
console.log(info);

// intrect different object in same object

const AcademicInfo = function (ace) {
  ace.roll = Math.trunc(Math.random() * 100000000);
  console.log(ace.roll);
  console.log('opk');
};
AcademicInfo(info);
infos(age, info);

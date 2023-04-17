'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-06-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements

// testt github

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// const accounts = [account0, account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovment = function (movements, sort = false, sortCount = 0) {
// containerMovements.innerHTML = '';
// const movs =
// sort?.sortCount == 0
// ? movements.slice().sort((a, b) => a - b)
// : sort?.sortCount == 1
// ? movements.slice().sort((a, b) => b - a)
// : movements;
containerMovements.innerHTML = '';
// movs.forEach(function (move, i) {
// const type = move > 0 ? 'deposit' : 'withdrawal';
//
// const html = `
// <div class="movements__row">
// <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//
// <div class="movements__value">${move} €</div>
// </div>`;
// containerMovements.insertAdjacentHTML('afterbegin', html);
// });
// };

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const year = ` ${date.getFullYear()}`;
    const month = `${date.getMonth()}`.padStart(2, 0);
    const day = `${date.getDate()}`.padStart(2, 0);
    return `${day}/${month}/${year}`;
  }

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  // return new Intl.DateTimeFormat(locale).format(date);
};

const currentDate = function () {
  const Nowdate = new Date();
  const year = ` ${Nowdate.getFullYear()}`;
  const month = `${Nowdate.getMonth()}`.padStart(2, 0);
  const day = `${Nowdate.getDate()}`.padStart(2, 0);
  const hr = `${Nowdate.getHours()}`.padStart(2, 0);
  const min = `${Nowdate.getMinutes()}`.padStart(2, 0);
  labelDate.textContent = `${day}/${month}/${year}, ${hr}:${min}`;
};

// const DisplayDate = function (Nowdate) {
// const Nowdate = new Date();
//
// const caldatePassed = (date1, date2) =>
// Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
// let datePassed = caldatePassed(new Date(), Nowdate);
//
// if (datePassed === 0) return 'Today';
// if (datePassed === 0) return 'Yesterday';
// if (datePassed <= 7) return `${datePassed} days ago`;
// else {
// const year = ` ${Nowdate.getFullYear()}`;
// const month = `${Nowdate.getMonth()}`.padStart(2, 0);
// const day = `${Nowdate.getDate()}`.padStart(2, 0);
// return `${day}/${month}/${year}`;
// }
// };
//
const displayMovment = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  // containerMovements.innerHTML = '';
  movs.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    // const Nowdate = new Date(acc.movementsDates[i]);
    // const year = Nowdate.getFullYear();
    // const month = `${Nowdate.getMonth()}`.padStart(2, 0);
    // const day = `${Nowdate.getDate()}`.padStart(2, 0);

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${move} €</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovment(account1.movements);

// const Name = 'Joy Matubber';

const createUserName = function (account) {
  account.forEach(function (acc) {
    acc.userName = acc.owner
      .toLocaleLowerCase() //joy matubber
      .split(' ') // 'joy' 'matubber'
      .map(
        name => name[0] //'j' 'm'
      )
      .join(''); //jm
  });
};
// console.log('ok');
createUserName(accounts);

const UpdateUI = function (acc) {
  displayMovment(acc); // display Movment
  balanceDisplay(acc); // display login account balance
  displaySummery(acc); // display in
};

// use regular function
// const balanceDisplay = function (movements) {
//   console.log('ok');
//   const balance = movements.reduce(function (sum, cur) {
//     return (sum += cur);
//   }, 0);
//   labelBalance.textContent = `${balance} ERO`;
// };
// use arrow function

const balanceDisplay = function (acc) {
  console.log('ok');
  acc.balance = acc.movements.reduce((sum, cur) => sum + cur, 0);

  labelBalance.textContent = `${acc.balance} €`;
};
// balanceDisplay(account1.movements);

const displaySummery = function (acc) {
  const dipo = acc.movements
    .filter(mov => mov > 0)
    // .map(mov => mov * euroToUsd)
    .reduce((sum, mov) => sum + mov, 0)
    .toFixed(2);

  labelSumIn.textContent = `${dipo} €`;
  const withdraw = acc.movements
    .filter(mov => mov < 0)
    // .map(mov => mov * euroToUsd)
    .reduce((sum, mov) => sum + mov, 0)
    .toFixed(2);

  labelSumOut.textContent = `${Math.abs(withdraw)} €`;
  let intRate = acc.interestRate;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * intRate) / 100)
    .filter((mov, i, arr) => mov >= 1)
    .reduce((sum, mov) => sum + mov, 0)
    .toFixed(2);
  labelSumInterest.textContent = `${interest} €`;
};
// displaySummery(account1.movements);

// log in feature

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // reload hoa off kore karon amra jokhn submit button e click kroi page ta reload hoy
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Wlcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputClosePin.blur();
    UpdateUI(currentAccount);
    currentDate();
    // displayMovment(currentAccount.movements); // display Movment
    // balanceDisplay(currentAccount); // display login account balance
    // displaySummery(currentAccount); // display in out intrese all value
  }
  console.log(currentAccount.userName);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const recevAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recevAccount &&
    recevAccount.userName !== currentAccount.userName
  ) {
    console.log('transfer valid');
    currentAccount.movements.push(-amount);
    recevAccount.movements.push(amount);

    // adding date
    currentAccount.movementsDates.push(new Date());
    recevAccount.movementsDates.push(new Date());

    // update UI
    UpdateUI(currentAccount);
    DisplayDate();
  }
  inputTransferTo.value = inputTransferAmount.value = '';
});

// ddelete account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      // kon account delet korbo khuje ber korbe
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);
    accounts.splice(index, 1); // delete one time
    containerApp.style.opacity = 0; //account delete kore dile information show korbe na
  }
  inputCloseUsername.value = inputClosePin.value = ''; // set this positin is emplty
  // console.log('delete');
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date());

    UpdateUI(currentAccount);
    currentDate();
  }
  inputLoanAmount.value = '';
});

// sort button
// const sorted = false;
//
// btnSort.addEventListener('click', function (e) {
// e.preventDefault();
// if (sorted == 0) {
// currentAccount.movements.sort((a, b) => a - b);
//
// UpdateUI(currentAccount);
// sorted = 1;
// } else {
// UpdateUI(currentAccount);
// }
// });

// let sort = false;
// let sortCount = 0;
// btnSort.addEventListener('click', function (e) {
// e.preventDefault();
// sortCount = Number(sortCount);
//
// displayMovment(currentAccount.movements, !sort, sortCount);
// sortCount++;
// sortCount = sortCount % 3;
// sortCount == 2 ? (sort = !sort) : sort;
// });
//
let sort = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovment(currentAccount.movements, !sort);
  sort = !sort;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// flat and flatmap

// const allMovsrr = accounts.map(acc => acc.movements);
//
// const allmov = allMovsrr.flat();
// console.log(allmov);
// const allMovSum = allmov.reduce((acc, mov) => acc + mov, 0);
// console.log(allMovSum);

// const allInOne = accounts
// .map(acc => acc.movements)
// .flat(1)
// .reduce((sum, cur) => sum + cur, 0);
// console.log(allInOne);
//
// const allInOne1 = accounts
// .flatMap(acc => acc.movements) // instand of use map and flat we uise flatMap
// .reduce((sum, cur) => sum + cur, 0);
// console.log(allInOne1);
//

//############## Practies ######################
//NO1: add all movment sum
const sumAllDepoMov = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((sum, mov) => sum + mov, 0);
console.log(sumAllDepoMov);
// NO2:Diposit at least 1000
let count = 0;
const DipoCuont = accounts
  .map(acc => acc.movements)
  .flat()
  .forEach(move => (move >= 1000 ? count++ : count));
console.log(count);

const { Dipo, Withd } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      sum[cur > 0 ? 'Dipo' : 'Withd'] += cur;
      return sum;
    },
    { Dipo: 0, Withd: 0 }
  );
console.log(Dipo, Withd);

// title var setup

// const titletext = function (title) {
// const text = [
// 'a',
// 'the',
// 'an',
// 'and',
// 'but',
// 'or',
// 'on',
// 'in',
// 'with',
// 'was',
// ];
// const titleReady = title
// .toLowerCase()
// .split(' ')
// .map(str =>
// text.includes(str) ? str : str[0].toUpperCase() + str.slice(1)
// )
// .join(' ');
// return titleReady;
// };
// console.log(titletext('my name is a JOY i was passed bsc '));
//
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);
  //
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  //
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');
  //
  return capitzalize(titleCase);
};
//
console.log(convertTitleCase('this is a nice title'));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// convert string to number
let x = '23';
console.log(x); // string
console.log(+x); // number
// parsing

let y = ' 12.5px ';
console.log(Number.parseInt(y));
console.log(Number.parseFloat(y));
// reminder

const evenodd = n => (n % 2 ? 'odd' : 'even');
console.log(evenodd(6));

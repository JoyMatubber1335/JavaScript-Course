'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const account0 = {
  owner: 'Joy Matubber',
  movements: [100, 350, -300, 2000, -550, -130, 170, 2300],
  interestRate: 1.3, // %
  pin: 1234,
};

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account0, account1, account2, account3, account4];

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

const displayMovment = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    
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
  displayMovment(acc.movements); // display Movment
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
    .reduce((sum, mov) => sum + mov, 0);

  labelSumIn.textContent = `${dipo} €`;
  const withdraw = acc.movements
    .filter(mov => mov < 0)
    // .map(mov => mov * euroToUsd)
    .reduce((sum, mov) => sum + mov, 0);

  labelSumOut.textContent = `${Math.abs(withdraw)} €`;
  let intRate = acc.interestRate;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * intRate) / 100)
    .filter((mov, i, arr) => mov >= 1)
    .reduce((sum, mov) => sum + mov, 0);
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
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Wlcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputClosePin.blur();
    UpdateUI(currentAccount);
    // displayMovment(currentAccount.movements); // display Movment
    // balanceDisplay(currentAccount); // display login account balance
    // displaySummery(currentAccount); // display in out intrese all value
  }
  console.log(currentAccount.userName);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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

    // update UI
    UpdateUI(currentAccount);
  }
  inputTransferTo.value = inputTransferAmount.value = '';
});

// ddelete account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

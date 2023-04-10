'use strict';
const score0 = document.querySelector('#score--0');
score0.textContent = 0;
const score1 = document.querySelector('#score--1');
score1.textContent = 0;
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const Current0 = document.querySelector('#current--0');
const Current1 = document.querySelector('#current--1');
const backColor0 = document.querySelector('.player--0');
const backColor1 = document.querySelector('.player--1');
// const me = document.querySelector('#name--0');
// const you = document.querySelector('#name--1');

const dice = document.querySelector('.dice');
dice.classList.add('hidden'); // hide the value
let currentValue = 0;
let myScore = 0;
let yourScore = 0;
// let CalculateScore = score0;
let Score = myScore;
let scoreChange = score0;

let playerChange = Current0;
const chnagPlayer = function () {
  currentValue = 0;
  backColor0.classList.toggle('player--active');
  backColor1.classList.toggle('player--active');

  playerChange.textContent = 0;
  if (playerChange === Current0) {
    playerChange = Current1;
    scoreChange = score1;
  } else {
    playerChange = Current0;
    scoreChange = score0;
  }
};
btnRoll.addEventListener('click', function () {
  // if we click roll
  const Num = Math.trunc(Math.random() * 6) + 1;
  console.log(Num);
  dice.classList.remove('hidden');
  dice.src = `dice-${Num}.png`;
  if (Num !== 1) {
    // if Number get  is not 0
    currentValue += Num;
    playerChange.textContent = currentValue;
  } else {
    chnagPlayer();
  }
});

btnNew.addEventListener('click', function () {
  dice.classList.add('hidden');
  score0.textContent = 0;
  score1.textContent = 0;
  Current0.textContent = 0;
  Current1.textContent = 0;
  myScore = 0;
  yourScore = 0;
  currentValue = 0;
  scoreChange = score0;
  playerChange = Current0;
});

const holdBtn = function () {
  if (playerChange === Current0) {
    Player2();
  } else {
    Player1();
  }
  //   myScore = 0;
};

btnHold.addEventListener('click', holdBtn);

const Player1 = function () {
  myScore += currentValue;
  scoreChange.textContent = myScore;
  currentValue = 0;
  playerChange.textContent = 0;
  chnagPlayer();
};
const Player2 = function () {
  yourScore += currentValue;
  scoreChange.textContent = yourScore;
  currentValue = 0;
  playerChange.textContent = 0;
  chnagPlayer();
};

function fun() {
  // REGULAR
  console.log('ok');
}
fun();

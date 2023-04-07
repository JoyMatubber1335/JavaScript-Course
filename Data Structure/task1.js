'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//part 1

const team1 = game.players[0];
console.log(...team1);

const team2 = game.players[1];
console.log(...team2);
//part 2
const [gk, ...fieldPlayers] = team1;
console.log(`GK is: ${gk}`);
console.log(`fieldPlayers are :${fieldPlayers}`);
//part 3
const allPlayer = [...team1, ...team2];
console.log(...allPlayer);

//part 4
const newPlayer = ['joy', 'rana', 'rakib'];

const playersFinal = [...team1, ...newPlayer];
console.log(...playersFinal);

// const fieldPlayers=();
// part 5
const { team1: t1, x: draw, team2: t2 } = game.odds;
console.log(t1);
console.log(draw);
console.log(t2);

// part 6

const printGoal = function (...allPlayer) {
  console.log(`${allPlayer.length} are scored`);
};
printGoal(...game.scored);

//part 7

t1 < t2 && console.log('team1 win the game');
t1 > t2 && console.log('team2 win the game');
t1 == t2 && console.log('Draw win the game');



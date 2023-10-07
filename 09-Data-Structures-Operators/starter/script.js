'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// //1
// const [player1, player2] = game.players;
// console.log(player1, player2);

// //2
// const [gk, ...fieldPlayers] = player1;

// //3
// const allPlayers = [...player1, ...player2];

// const players1Final = [...player1, 'Thiago', 'newPlayer2', 'newPlayer3'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// // Map (key can be any type)
// const rest = new Map();
// rest.set('name', 'Sanjeewa'); //0: "name" => "Sanjeewa"
// rest.set(1, 'red');
// rest.get(1); // red

// //can use like below
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// rest.delete(1);
// rest.has(1);
// rest.clear();

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2]));
// // undefined => not same objects in heap [1,2] key must be exact match

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
// // Test  => now this array refer to tha same place in memory

// //can use like below
// rest.set(document.querySelector('h1'), 'Heading');

// Maps Iterations

// Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log('events:', events);

// gameEvents.delete(64);
// console.log(gameEvents);

// const checkFlightMiddleSeat = function (seat) {
//   // B and E middle seats
//   const s = seat.slice(-1);
//   s === 'B' || s === 'E' ? console.log('yes') : console.log('no');
// };
// checkFlightMiddleSeat('343E'); //yes

// //Behind the seen is primitive string is convert to object and call the method
// console.log(new String('sanjeewa')); //=> object of letters
// console.log(typeof new String('sanjeewa')); // object

// // Once the operation done again convert to regular string
// console.log(typeof new String('sanjeewa').slice(1)); //string

// const airLine = ' TAP Air Portugal';

// console.log(airLine.toLocaleLowerCase());
// console.log(airLine.toUpperCase());

// const loginEmail = ' Helloe@sanjeewa.com \n';
// const loverEmail = loginEmail.toLocaleLowerCase();
// const trimEmail = loginEmail.trim(); //helloe@sanjeewa.com

// //Replacing
// const priceGB = '288,97R';
// const price = priceGB.replace('88', '66');

// //Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));
// console.log(plane.endsWith('neo'));

// //split and join
// console.log(plane.split(' '));
// console.log(['Sanjeewa', 'Ranuluge'].join(' ')); //Sanjeewa Ranuluge

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('sanjeewa bandara ranuluge');
// capitalizeName('school bus');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836)); // *****7836
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

// // Repeat
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5); //There are 5 planes in line 🛩🛩🛩🛩🛩
// planesInLine(3); //There are 3 planes in line 🛩🛩🛩
// planesInLine(12);
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   const values = document.querySelector('textarea').value;
//   const rows = values.split('\n');
//   console.log(rows.entries());

//   // using entries() we can access current index => [i, row]
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// function flightStatus(detail) {
//   const newStrSplitByPlus = detail.split('+');

//   const getCode = str => str.slice(0, 3).toUpperCase();
//   for (const flight of flights.split('+')) {
//     const [type, from, to, time] = flight.split(';');
//     const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//       '_',
//       ' '
//     )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
//       36
//     );
//     console.log(output);
//   }
// }

// flightStatus(flights);
// let numbers = [];
// let a = 3;
// let b = 6;
// const obj = { a: 1, b: 2 };
// // const { a: numbers[0], b: numbers[1] } = obj;

// console.log(a, b);
// ({ a, b } = obj);
// console.log(a, b);
// // const obj = { 0: 'a', 1: 'b', length: 2 };
// // const { 0:0, 1:1, length } = obj;
// // console.log(a, b);

function checkDogs(dogsJulia, dogsKate) {
  const newArrayJulia = dogsJulia.slice(1, 3);
  const newArrayKate = dogsKate.slice();
  const dogs = newArrayJulia.concat(newArrayKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is adult and ${dog} year old`);
    } else {
      console.log(`Dog number ${i + 1} is a puppy and ${dog} year old`);
    }
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

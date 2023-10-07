'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   printAge: function printAge(){
//         console.log(this);
//       const outPut
//     }
//     printAge()
//   return age;
// }

// const firstName = 'john';
// calcAge(1882);

// // const calcAgeA = birthYear => {
// //   const age = 2037 - birthYear;
// //   console.log(this);
// //   const aa = function () {};
// //   aa();
// //   return age;
// // };

// // calcAgeA(1882);

// const aa = function () {};

// console.log(this);
// aa();

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(this.year);
//   },
// };
// jonas.calcAge(); // object properties and 1991

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); //object properties and 2017

// const f = jonas.calcAge;
// f(); // with use strict => (object properties) undefined and Nan / does ot has a owner (object)
// // without use strict => window object and Nan

// // with arrow function this === window object

// arrow and normal

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     const self = this; // self or that
//     const isMillenial = function () {
//       console.log(self, this);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };

//     // Solution 2
//     // const isMillenial = () => {
//     //   console.log(this); //parent this {firstName:'Jonas...}
//     //   console.log(this.year); //1991;
//     // };

//     isMillenial();
//   },

//   greet: () => {
//     console.log(jonas.firstName);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// arguments keyword

// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
//   };
//   addExpr(2, 5);
//   addExpr(2, 5, 8, 12);

//   var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
//   };
//   addArrow(2, 5, 8);

// Objects vs. primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types  (store in call stack)
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // Davis Williams

// Reference types (store in heap)
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {}; canot do this coz we tring to change callstack value with const cannot reassign

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //This will shallow copy nested array canot copy  and create new object
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

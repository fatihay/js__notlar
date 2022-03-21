'use strict';

///////////////////////////////////////
// Activating Strict Mode
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 534;

// ///////////////////////////////////////
// // Functions
// function logger() {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// FUCTION DECLERATION
// console.log(calcAge1(1979));
// Function decleration'lar fonksiyon tanımlamadan önce kullanırsak yine çalışıyor


// function calcAge1(birthYear) {
//   // parantez içindeki birthyear parameter
//   return 2037 - birthYear;
// }

// console.log(calcAge1(1979));
// // 1979 is argument


// FUNCTION EXPRESSION
// console.log(calcAge2(1991));
//  Function expression'lar tanımlanmadan önce kullanılırsa çalışmıyorlar
// cannot access calsAge2 before initialization -- uyarı


// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// // anonymous function - isimsiz fonksiyon

// console.log(calcAge2(1991));


// ARROW FUNCTION

// const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(1979));

// const yearsUntilRetirement = (birthYear, firstNAme) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstNAme} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1979, 'Fatih'));


///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

'use strict';

/*
/////////////////////////////////////
Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

FUCTION DECLERATION
console.log(calcAge1(1979));
Function decleration'lar fonksiyon tanımlamadan önce kullanırsak yine çalışıyor


function calcAge1(birthYear) {
  // parantez içindeki birthyear parameter
  return 2037 - birthYear;
}

console.log(calcAge1(1979));
// 1979 is argument


FUNCTION EXPRESSION
console.log(calcAge2(1991));
 Function expression'lar tanımlanmadan önce kullanılırsa çalışmıyorlar
cannot access calsAge2 before initialization -- uyarı


const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
// anonymous function - isimsiz fonksiyon

console.log(calcAge2(1991));


ARROW FUNCTION

const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(1979));

const yearsUntilRetirement = (birthYear, firstNAme) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstNAme} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1979, 'Fatih'));


/////////////////////////////////////
Introduction to Arrays
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

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
// push metodu ayrıca lenght değeri dönüyor

console.log(friends);
console.log(newLength);

friends.unshift('John');
// en başına ekleniyor

console.log(friends);

// Remove elements
friends.pop(); // Last
// son elemanı siliyor
// returns removed element

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
// ilk elemanı siliyor
// returns removed element

console.log(friends);

console.log(friends.indexOf('Steven'));
// elemanın endeksini veriyor

console.log(friends.indexOf('Bob'));
// Bob olmadığı için array'de -1 değeri dönüyor

friends.push(23);
console.log(friends.includes('Steven'));
// true ya da false dönüyor

console.log(friends.includes('Bob'));
console.log(friends.includes(23));
// number olunca true, '23' olarak sorgulasaydık false, type coercion yapmıyor

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// bunlar da ilginç



// console.log(jonas.'last' + nameKey);
// böyle zaten çalışmıyor
//  after dot natation we have to use real final property name, not computed property name


const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

*/

///////////////////////////////////////
// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }
  // any function that is atteched to the object is called a method

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());




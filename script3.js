'use strict';

// // TEMPLATE LITERAL

// const fatih = `I'm ${firstName}, a ${year - birthyear} year old ${job}`;
// // backtick için altgr + virgül
// // ES6 sonrası

// console.log(fatih);
// console.log(`Just a regular string..`);

// console.log('String \n\multiple \n\lines'); //es6 öncesi

// console.log(`String
// multiple
// lines
// after ES6`);
// // after ES6

// const birthYear = 1998;

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);
// // değişkeni if bloğu içinde oluştursaydık, if dışında kullanamazdık


// TYPE CONVERSION
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);
// console.log(String(23));

// // TYPE COERCION
// console.log('I am ' + 23 + 'years old');
// console.log('23' - '10' - 4);
// // javascript otomatik olarak sayıya çevirdi

// console.log('23' + '10' + 4);
// // Bunda otomatik olarak stringe çevirdi

// 5 falsy values: 0, '', undefined, null, NaN
// of course false

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// // true
// console.log(Boolean({}));
// // true

// const age = 18;
// if (age === 18) console.log('You just became an adult :)');
// // if bloğunda tek satırlık kod olunca curly brace'e gerek yok
// // çift eşit olursa "==" type coercion oluyor
// // burada '18' ile 18 false sonucu dönüyor

// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);
// // string dönüyor

// if (favourite !== 23) console.log('Why not 23?');


//  ! -- not operator
// &&  -- and operator
// ||  -- or operator


// const day = 'monday';

// switch (day) {
//   case 'monday':  // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;

//   case 'tuesday':  // day === 'tuesday'
//     console.log('Prepare theory videos');
//     break;

//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;

//   default:
//     console.log('Not a valid')
// }

// const age = 23;
// age >= 18 ? console.log('I like to drink tea ❤') : console.log("I don't like to drink tea");
// emoji için windows key + .
// // conditional (ternary) operator

// // const drink = age >= 18 ? 'tea ❤' : 'coffee ☕';
// // console.log(drink);
// bu yöntem daha çok kullanılıyor

// console.log(`I like to drink ${age >= 18 ? 'tea ❤' : 'coffee ☕'}`);


// CODING CHALLENGE 4

// const bill = 430;

// console.log(`Your bill is ${bill}, your tip is ${(bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2)} and your total is ${(bill >= 50 && bill <= 300) ? (bill * 1.15) : (bill * 1.2)}`);

// Your bill is 275, your tip is 41.25 and your total is 316.25

// Your bill is 40, your tip is 8 and your total is 48

// Your bill is 430, your tip is 86 and your total is 516


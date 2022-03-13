const firstName = 'Fatih';
const job = "teacher";
const birthyear = 1979;
const year = 2022;

// TEMPLATE LITERAL

const fatih = `I'm ${firstName}, a ${year - birthyear} year old ${job}`;
// backtick için altgr + virgül
// ES6 sonrası

console.log(fatih);
console.log(`Just a regular string..`);

console.log('String \n\multiple \n\lines'); //es6 öncesi

console.log(`String
multiple
lines
after ES6`);
// after ES6


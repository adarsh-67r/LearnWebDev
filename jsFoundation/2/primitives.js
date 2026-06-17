// Number

let balance = 110;
let anotherBalance = new Number(110);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined

let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);

//string

let myString = "hello";
let myStringOne = "Hola";
let username = "adarsh";

let oldGreet = myString + " " + "adarsh";
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`; //string interpolation
let demoOne = `Value is ${2 * 2}`;
// console.log(greetMessage);
// console.log(demoOne);

let sm1 = Symbol("adarsh");
let sm2 = Symbol("adarsh");

console.log(sm1);
console.log(sm2);
console.log(sm1 === sm2);

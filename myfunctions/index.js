// import * as http from 'http';

// Methods / Functions
// Inside the brackets () 

// Add 2 numbers together
// function add(numberOne, numberTwo) {
//     // * + - /
//     // eg numberOne = 5
//     // eg numberTwo = 12
//     // return 5 + 12; -> 7
//     const sum = numberOne + numberTwo;
//     return sum;
// }

let a = 5;
let b = 12;
let c = 24;
let d = 300;

// let e = add(d, c);
// let e = 17;
// console.log(e);

// Function declaration
function multiply(numberOne, numberTwo) {
    const sum = numberOne * numberTwo;
    return sum;
}

let f = multiply(a, b);
console.log(f);

// Function expression
const add = function(numberOne, numberTwo) {
    return numberOne + numberTwo;
};

console.log(add(a, b));

// Arrow functions
const addArrow = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
};

console.log(addArrow(c, d));

// Objects Recap


let don = {
    name: "Don",
    address: {
        street: "123 Example Street",
        city: "Perth"
    },
    age: "1000",
    greet: function() {
        console.log("Hello World!");
    }
}

console.log(don.address.city);
console.log(don.greet());

// Methods in Objects
let objOne = Object.keys(don);
let objTwo = Object.values(don);
let objThree = Object.entries(don);
console.log(objThree);

// Booleans and logical operators
// == loose equality, and doesn't care for type, type coercion and then compares
// === strict equality, no type coercion, compares type and value

console.log("5" == 5); // true value is same via type coercion

console.log("5" === 5); // false type is not same


// <> and <= >=
console.log("apple" <= "banana");

// && ||

// if(true || false) {

// }
let myNumber = 10;
let statementA = myNumber < 5; // A
let statementB = myNumber > 2; // B
console.log(statementA || statementB);

let statementOne = 100 > 5;
let statementTwo = 5 < 1;
let statementThree = statementOne || statementTwo;
let statementFour = statementOne && statementTwo;

// AND (&&) Truth Table    OR (||) Truth Table
// A     B     Result      A     B     Result
// true  true  true        true  true  true
// true  false false       true  false true
// false true  false       false true  true
// false false false       false false false

// Don's Concert
// To enter the concert you need a ticket and you need to be 18+
// Rhy has a ticket and is 18+

let hasTicket = true;
let hasID = true;

let canEnterVenue = hasTicket && hasID;

// Payment options
let hasCash = false;
let hasCard = true;

let canPay = hasCash || hasCard;
console.log(canPay);

let isMember = true;
let hasCoupon = false;
let totalPrice = 100;

let getDiscount = (isMember || hasCoupon) && (totalPrice > 50);

let isLoggedIn = true
let isGuest = false
let isBanned = false

// User must be logged in or a guest and not banned to play games
let playGame = (isLoggedIn || isGuest) && (isBanned != true);

// Recap of booleans and logical operators
let myBoolean = true;
let myBooleanTwo = false;

// Withdraw

let dailyLimit = 5000;
let myBalance = 100;
let withdrawAmount = 25;
let hasValidCard = true;
// 1. As someone with a valid card 
// 2. is able to withdraw any amount less than or equal to their daily limit and current balance
// let isAbleToWithdraw = hasValidCard && (withdrawAmount <= (dailyLimit && myBalance));

// Conditionals (if else)
let age = 16;
if(age >= 18) {
    console.log("Adult");
}

let temperature = 31;
if(temperature > 30) {
    console.log("its hot outside");
} else {
    console.log("its not too hot...");
}

let time = 6;
// Time is past 6PM then dinner time
if(time > 6) {
    console.log("Time for dinner");
} else {
    console.log("Snack time");
}

let grade = 75;

if(grade >= 90) {
    console.log("A");
} else if(grade >= 80) {
    console.log("B");
} else if(grade >= 70) {
    console.log("C");
} else {
    console.log("Needs improvement")
}

let pocketChange = 5;
let blueberryMuffin = 7;
let chocolateDonut = 6;
let flatWhite = 6;
let longMac = 7;
// blueberry muffin, chocolate donut, flat white, long mac
if(blueberryMuffin <= pocketChange) {
    console.log("Buy muffin");
} else if(chocolateDonut <= pocketChange) {
    console.log("Buy donut");
} else if(flatWhite <= pocketChange) {
    console.log("Buy FW");
} else if(longMac <= pocketChange) {
    console.log("Buy long mac");
} else {
    console.log("go home");
}

// if() {

// }

// else {

// }

// Where should I pet this cat?
// let catAngryMeter = 80;
// if(catAngryMeter < 5) {
//     console.log("belly rubs");
// } 

// else if(catAngryMeter < 15) {
//     console.log("back rubs");
// } 

// else if(catAngry < 35) {
//     console.log("head scratches");
// }

// else {
//     console.log("Don't touch the cat :)");
// }

// 
let numberOfCheeseburgers = 10; 
if(numberOfCheeseburgers >= 20) {
    console.log("wow thats a lot of burgers");
} else if(numberOfCheeseburgers > 12) {
    console.log("Get  some more!");
} else {
    console.log("not enough cheese burgers");
}

let isWeekend = true;
let errandsCompleted = false;

if(isWeekend) {
    if(errandsCompleted) {
        console.log("You deserve a pain au chocolat");
    } else {
        console.log("get back to work");
    }
} else {
    console.log("You're not allowed to rest its still the weekdays");
}

let hasInsurance = true;
let hasLicense = true;
let isSober = true;

if(hasLicense && hasInsurance && isSober) {
    console.log("DRIVE");
} else {
    console.log("See you at the police station");
}

let isRaining = true;
let isSnowing = false;

if(isRaining || isSnowing) {
    console.log("Take an umbrella");
}

let ageToVote = 20;
let canVote = ageToVote == 1 ? "Yes" : "No";
console.log("Can vote: ", canVote);

let dayNumber = 6;
let day;

switch(dayNumber) {
    case 1: 
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    default:
        day = "Weekend";

}

console.log("Today is", day);

// Loops

// for loop
for(let counter = 0; counter < 5; counter++) {
    console.log(counter + " : Hello World");
}

// while loop
let count = 0;
while(count < 5) {
    console.log(count);
    count++;
}

// do while loop
let num = 0;
do {
    console.log(num);
    num++;
} while(num < 5);

// for iterate  
const fruits = ['apple', 'banana', 'orange'];
for(let fruit of fruits) {
    console.log(fruit);
}

const veggies = ['broccoli', 'potatos', 'carrots'];

// for iterate overp roperties
const person = {name: 'Steve', age: 28, job: "Milkman"};
for(let key in person) {
    console.log(key + ': ' + person[key]);
}

function checkWeather(temp) {
    if(temp > 30) {
        console.log("Jeez getting real hot!");
    } else if(temp > 20) {
        console.log("It's kinda warm");
    } else if(temp > 10) {
        console.log("Chillly brrrrr");
    }
    else {
        console.log("It's pretty cool");
    }
}

checkWeather(400);

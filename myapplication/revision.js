// Booleans
// true / false
let isRaining = true;

if(isRaining) {
    console.log("You need an umbrella");
}

// Conditional
// If 
let userAuthenticated = true;
let pinIsValid = true;
if(userAuthenticated) {
    console.log("Displaying your current balance");
}

// If else

// if(userAuthenticated) {
//     console.log("Here is your current balance: $10");
// } else {
//     console.log("You are not authenticated");
// }

// If else if else
// if(userAuthenticated) {
//     console.log("Here is your current balance: $10");
// } else if(pinIsValid) {
//     console.log("Here is your current balance: $10");
// } 
// else {
//     console.log("You are not authenticated");
// }

let balance = 10;
// Nested if else
if(userAuthenticated) {
    console.log("Your balance is 10$");
    if(balance > 15) {
        console.log("You can withdraw money");
    } else if(balance < 15) {
        console.log("Take a loan?");
    } 
    else {
        console.log("You don't have enough to withdraw");
    }
} else {
    console.log("Please log in");
}

// Loops
// For loop
// for(let counter = 0; counter < fruits.length;  counter++) {
//     console.log("Loop: ", counter);
//     let fruit = fruits[counter]; 
//     if(fruit == 'banana') {
//         return fruit;
//     }
// }

// While loop
let count = 0;
while(count < 5) {
    console.log("While loop: ", count);
    count++;
}

// Do while loop
let num = 0;
do {
    console.log("Do while: ", num);
    num++;
} while(num < 0);

// iterable for loops
const fruits = ['apple', 'banana', 'orange'];
for(const fruit of fruits) {
    console.log(fruit);
};

const foods = ['chips', 'curry', 'cheeseburgers', 'chinese'];

const employees = [
    { name: "Steve", tenure: 25, occupation: "Programmer" },
    { name: "Jane", tenure: 12, occupation: "Designer"},
    { name: "Bob", tenure: 5, occupation: "Analyst"}
];

for(const employee of employees) {
    // console.log(employee);
    if(employee.occupation == 'Programmer') {
        console.log(employee);
    }
}
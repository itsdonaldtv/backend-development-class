let animal = "Tiger";
const animalTwo = "Chimpanzee";

console.log(animal, animalTwo);

let a = 1; a = 10; let b = 2; let c = a + b;

console.log(a, b, c);

let cat = "Tabby";
cat = "Persian";

let cAt;
let CAt;

let dog = "Rex";
let dogTwo ="Spot";
let donsArrayOfDogsOfDifferentNames = ['Spot', 'Rex', 'Scruffy', 'Rocky'];

// Valid ways to name a variable (start)
let myVariable;
let $thisWorks;
let _alsoWorks;

let scopedVariable = "Hello Australia";
{
    console.log(scopedVariable);

    let scopedVariableTwo = "Hello Western Australia";
    console.log(scopedVariableTwo);
    {
        let scopedVariableThree = "Hello Perth";
        console.log(scopedVariableThree);
        {
            let scopedVariableFour = "Hello Lord St";
            console.log(scopedVariableFour)
        }
    }
}

// Code blocks can access outside variables 
// but outside variables can't access code block variables

let outsideBlock = "Delphine";
{
    let insideBlock = "Rhys";
    insideBlock = outsideBlock;
    console.log(insideBlock);
}

let scopeVariable = "Hello Australia"
{
    console.log(scopeVariable);

    let scopedVariableTwo = "Hello Western Australia";
    console.log(scopedVariableTwo);
}

// Inside the scope (scopeVariableTwo) can grab and print scopeVariable but not vice versa

// Data types

let age = 25; // Number 
let message = "Hello World"; // String
let isAllowed = false; // Boolean
let myArray = [1, 2, 3, 4]; // Array of things
let myObject = {
    objectName: 'Object 1',
    objectType: 'String'
}; // Object

// Checking data type
// Type checking
console.log(typeof myArray);
console.log(isAllowed);

//  Working with strings
let firstName = "Don";
let lastName = "Smith";

console.log(firstName + " " + lastName);
console.log(`Hello, ${firstName}!`)

// Brackets
// () --> these indicator like a method call or function an example console.log();
// {} --> Define scope through code block used in if() {} or functions like myFunction() {}
// [] --> Used in arrays like [1,2,3]
// <> --> Used in booleans for greater or less than 

// Array
let fruits = ["apple", "banana", "grape", "mandarin", "cantaloupe"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

// Objects
let person = {
    name: "Bob The Builder",
    age: 1000,
    location: "The World",
    isRetired: false,

};

// person.key will return the value so obj.key => value
console.log(person["age"]);

let noValue; 
console.log(noValue);
let erroredVariable = null;

// Lets create variables for types of food
// We're going to change some food variables to other foods

// We're going to create more foods in code blocks 

// Put some of our foods into arrays

// The other foods we're going to put in an object called MyOrder 
// MyOrder {
//  dish1: myFood or "cheeseburger"
// }

// Functions

// Arrow functions

// Conditions loops, boolean




// Input
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) =>  {
    const input = data.trim();
    console.log(`${input}`);

    if(input.toLowerCase() === 'exit') {
        process.exit();
    }
});
console.log("Enter some text, type 'exit' to quit");
function sayHello() {
    speak('Hello');
}

function ringDoorbell() {
    press(doorbell);
}

function bakeCookies(flour, ovenTemperature) {
    console.log('hello');

    // blah blah blah
    return cookies;
}

function dunkInMilk(cookies) {
    say('mmmmmm');
}

sayHello();

const flour = 'a bag of coles flour';
const ovenTemperature = 1000;

const myCookies = bakeCookies(flour, ovenTemperature);
dunkInMilk(myCookies);
// Always have the keyword 'function' when creating function

// Always have a name for your function, it should reflect what you want
// the code to be eg bakeCookies should bake cookies and not walk the dog

// ALways setup the imports, if you have none leave 'em blank () or (flour, water)

// ALways write the curly brackets to create the scope fr your code { }

// Write your code in the function

// Sometimes your function (recipe) will give you an output via the keyword return {value}

// If a function has a return we should assign it to a variable eg var, const
// so that we can use it later

// We can use this "variable" to reference the output of a function in other lines of code

// Function to greet a person and update the greeting output

function greetPerson() {
    const name = prompt('Give me your name');
    const greeting = greet(name);

    const greetingElement = document.getElementById('greeting-output');
    greetingElement.textContent = greeting;
}

function greet(name) {
    return "Good evening, " + name;
}

function calculateAreaAndDisplay() {
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');

    const area = calculateArea(parseFloat(lengthInput.value), parseFloat(widthInput.value));
    const areaOutput = document.getElementById('area-output');
    areaOutput.textContent = `Area: ${area}`;
}

function calculateAreaAndDisplay() {
    const length = document.getElementById('length');
    const width = document.getElementById('width');

    const lengthNum = parseFloat(length.value);
    const widthNum = parseFloat(width.value);

    const area = calculateArea(length, width);
    const areaOutput = document.getElementById('area-output');
    areaOutput.textContent = `Area: ${area}`;
}

function calculateArea(length, width) {
    return length * width;
}

function calculateAreaAndDisplay() {
    const length = document.getElementById('length');
    const width = document.getElementById('width');

    const lengthNum = parseFloat(length.value);
    const widthNum = parseFloat(width.value);

    const area = calculateArea(lengthNum, widthNum);
    const areaOutput = document.getElementById('area-output'); 
    areaOutput.textContent = `Area: ${area}`;
}

function calculateArea(length, width) {
    return length * width;
}

function isThisTheBestFood() {
    // Grab food input value
    const newFood = document.getElementById('food');
    let textOutput = '';
    // Check if value equals cheeseburgers
    if(newFood.value == "Cheeseburgers") {
        textOutput = "This is the best food!";
    }
    // If not say yuck, if it is say yum
    else {
        textOutput = "This is not the best food :(";
    }

    // Display result
    const foodOutput = document.getElementById('food-output');
    foodOutput.textContent = `${newFood.value}... ${textOutput}`;
}
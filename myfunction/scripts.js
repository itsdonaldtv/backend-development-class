// Function to greet a person
function greet(name) {
    return 'Good evening, ' + name + '!';
}
  
// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}
  
// Function to update the main output element
function updateOutput(text) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = text;
}
  
// Function to greet a person and update the greeting output
function greetPerson() {
    const name = prompt('Tell me your name:');
    const greeting = greet(name);

    const greetingOutput = document.getElementById('greeting-output');
    greetingOutput.textContent = greeting;
}
  
// Function to calculate the area and update the area output
function calculateAreaAndDisplay() {
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');

    // const area = calculateArea((lengthInput.value), (widthInput.value));
    const area = calculateArea(lengthInput.value, widthInput.value);
    const areaOutput = document.getElementById('area-output');
    areaOutput.textContent = `Area: ${area}`;
}

function isThisTheBestFood() {
    // Grab food input value
    const newFood = document.getElementById('food');
    let textOutput = '';

    const bestFood = "Cheeseburgers";

    let punctuationLess = newFood.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    // Check if value equals cheeseburgers
    if(punctuationLess.toUpperCase() == bestFood.toUpperCase()) {
        textOutput = "This is the best food!";
    }
    // Hamburgers are a contender...
    else if(newFood.value == "Hamburgers") {
        textOutput = "This is close... ish";
    }
    else if(newFood.value == "Chicken Parmi") {
        textOutput = "Sorta...";
    }
    else if(newFood.value == "Salad") {
        textOutput = "Please leave...";
    }
    else if(newFood.value == "Coriander") {
        textOutput = "This is the worst thing to exist...";
    }
    else {
        textOutput = "This is not the best food :(";
    }

    // Display result
    const foodOutput = document.getElementById('food-output');
    foodOutput.textContent = `${newFood.value}... ${textOutput}`;
}


console.log("Hello from script.js!");

// Add your JavaScript code here

// Terrible idea but this is for an example
const users = [
    {user: "Dong", pass: "password123"},
    {user: "Rhys", pass: "password"},
    {user: "Delphine", pass: "apassword"},
    {user: "John", pass: "123456"},
];

function getPass() {
    const inputPassword = document.getElementById('password');
    console.log(inputPassword.value);

    if(inputPassword.value != 'Don123') {
        const errorMessage = document.getElementById('login-message');
        errorMessage.textContent = "womp womp";
        errorMessage.style.color = 'red'
    }
}

function validatePassword() {

}

function validateUser() {

}
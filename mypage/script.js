const users = [
    {user: "Dong", pass: "password123"},
    {user: "Rhys", pass: "password"},
    {user: "Delphine", pass: "apassword"},
    {user: "John", pass: "123456"},
];

const password = ['p','a','s','s']
const password = 'pass';

document.getElementById('login-message').textContent = "";

function validateUser() {
    const userInput = document.getElementById("username");
    const passInput = document.getElementById("password");

    // Username = Rhys -> rhys
    const upperUser = userInput.value.toLowerCase();

    for(let i = 0; i < users.length; i++) {
        if((upperUser == users[i].user.toLowerCase()) && (passInput.value == users[i].pass)) {
            const loginMessage = document.getElementById('login-message');
            loginMessage.textContent = "Login successful";
            loginMessage.style.color = "green";
            return;
        } else {
            const loginMessage = document.getElementById('login-message');
            loginMessage.textContent = "Login failed";
            loginMessage.style.color = "red";
        }
    }

}

function validateUserRegistration() {
    // Grab the username from the input
    const userInput = document.getElementById("username");
    const passInput = document.getElementById("password");
    // Check if the username already exists across the users db
    const loginMessage = document.getElementById('login-message');

    // If its original  give green and message
    for(let i = 0; i < users.length; i++) {
        if(userInput.value.toLowerCase() ==  users[i].user) {
            loginMessage.textContent = 'Error';
            loginMessage.style.color = 'red';
        } else {
            loginMessage.textContent = "Unique user";
            loginMessage.style.color = 'green';
        }
    }
 
    // If not then red and error

    // Check if password is 6 characters long at least
    // You can check a length of string using string.length where string is your string var
    if(passInput.value.length < 7) {
        const loginMessage = document.getElementById('login-message');
        loginMessage.textContent = "Password needs to be > 6";
    }

    
    let symbolCount = 0;
    for(let i = 0; i < passInput.value.length; i++) {
        // password
        if(passInput.value[i] == '$') {
            symbolCount++;
        }
    }

    if(symbolCount > 0) {
        loginMessage.textContent = "YES THERE IS $";
    }


    // FOR length of string
    // IF character in string contains $ then count
    // IF $ count > 0 then green msg otherwise fail
}
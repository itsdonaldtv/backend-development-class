// Declare we are using express 
const express = require('express');

// Declare we want to use path
const path = require('path');

// Reference all express functionality to 'web_app' variable
const web_app = express();

// Define a port to use
const port = 3000;

// Set up middleware
// Lets us parse URL encoded bodies 
web_app.use(express.urlencoded({ extended: true }));

// Serve static files from a directory
// web_app.use(express.static('./'));

// Create our web app on 'port' and run the provided function when running
web_app.listen(port, () => {
    console.log("Server is running!");
});

// Get takes in 2 imports
// Import 1: path (eg localhost:3000/login)
// Import 2: arrow function (request, response)
web_app.get('/book', (request, response) => {
    // console.log(request, response);
    response.send('Here is your book on cats!');
});

web_app.get('/book/:name', (req, res) => {
    // req.params
    const name = req.params.name;

    // localhost:3000/book/rhysbook
    // req.params.name = rhysbook
    res.send(`This is your book on ${name}`);
});

// GET request
// /greet/:persons_name
web_app.get('/greet/:persons_name', (req, res) => {
    const persons_name = req.params.persons_name;
    res.send(persons_name);
});

web_app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

web_app.post('/submit', (req, res) => {
    const { username, email } = req.body;
    console.log(`Received data: ${username}, ${email}`);
    res.send("Form submitted!");
});
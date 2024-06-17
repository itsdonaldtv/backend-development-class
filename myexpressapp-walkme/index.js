const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

const homeRoute = require('./routes/home.js');
const loginRoute = require('./routes/login.js');

app.listen(PORT, (error) => {
        if(!error) {
            console.log("Server is running!");
        }
        else {
            console.log("Error has occured");
        }
    }
);

app.get('/hello', (request, response) => {
        response.set('Content-Type', 'text/html');
        response.status(200).send("<h1>Hello Equinim Class</h1>");
    }
);

// __dirname = the file path right now
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use("/", homeRoute);
app.use("/", loginRoute);

app.get('/', 
    (request, response, next) => {
        console.log("User loaded page");
        next();
    },
    (request, response) => {
        response.send(
            `<div>
                <h2>Welcome to everyone!</h2>
                <h5>Tutorial Middleware</h5>
            </div>`
        )
    }
);

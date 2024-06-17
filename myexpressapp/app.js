const express = require('express');

const app = express();
const PORT = 3000;

const path = require('path')
// Create new route called /static and generate static function
// Path join is getting the root file like C:\\documents\mydocument\mypage.html etc etc
// Next option is the name of the folder to tell express what to use
app.use('/static', express.static(path.join(__dirname, 'static')))

app.listen(PORT, (error) => {
    if(!error) {
        console.log("Server running on port: " + PORT);
    } else {
        console.log ("Error running");
    }
});

// Let's create our first route
app.get('/', (req, res)  => {
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.get('/firsthtml', (req, res) => {
    res.send('<h1> Hello, World! </h1>');
});

app.get('/firsthtmlarrow', (req, res) => res.send('<h1>Hello, World!</h1>'));

app.get('/hello', (req, res)  => {
    res.status(200);
    res.send("Welcome to hello URL of Server");
});



// app.use(express.json());
// app.post('/', (req, res)=>{
//     const {name} = req.body;
    
//     res.send(`Welcome ${name}`);
// })
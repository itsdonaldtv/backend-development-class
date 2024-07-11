const express = require('express');
const app = express();

// in no order :)
const data = ["Dong", "Rhys", "Delphine", "John"];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { data: data, message: "Hello Dong" });
});

app.get('/page2', (req, res) => {
    res.render('page2');
});

app.listen(3000, () => {
    console.log('Now running server');
});
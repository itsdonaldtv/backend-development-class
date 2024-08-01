const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Set up EJS
// Function on web server to set view engine to EJS
app.set('view engine', 'ejs');

// Function on express app to point the views for EJS to load
// app.set('views', path.join(__dirname), 'views');

// Set Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Create model for task
const Task = mongoose.model('Task', {
    title: String,
    date: Date,
    textContent: String,
    reported: Boolean,
    assignee: String
})

// Routes
app.get('/', async(req, res) => {
    const tasks = await Task.find();
    res.render('index', { tasks });
});

app.post('/add', async(req, res) => {
    const newTask = new Task({
        title: req.body.title,
        date: req.body.date,
        textContent: req.body.textContent,
        reported: req.body.reported === 'on',
        assignee: req.body.assignee
    });
    await newTask.save();
    res.redirect('/');
});

app.post('/delete/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
})

// Start up app
app.listen(port, () => {
    console.log('List App Created!');
});

// Express for our backend server and routing
const express = require('express');

// Mongoose for MongoDB object modeling
const mongoose = require('mongoose');

// Session for handling user sessions
const session = require('express-session');

// Bcrypt for password hashing
const bcrypt = require('bcrypt'); // For Rhys 'bcryptjs'

// Path for handling file paths
const path = require('path');

require('dotenv').config();

const uri = process.env.DB_URI;

// Initialise express
const app = express();
const port = 3000;

// Connect to the DB
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Failed to connected to DB', err));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up middleware for parse URL encoded bodies and service static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Schema for to do here
const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String },
    createdAt: { type: Date, default: Date.now },
    todos: [todoSchema]  // This adds an array of todos to each user
});

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = mongoose.model('User', userSchema);

function isAuthenticated(req, res, next) {
    if(req.session.userId) {
        next();
    } else {
        res.redirect('/login');
    }
}

app.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if(user && await bcrypt.compare(req.body.password, user.password)) {
           req.session.userId = user._id;
           res.redirect('/welcome'); 
        } else {
            res.redirect('/error');
        }
    } catch(error) {
        res.status(500).send('Error logging in');
    }
});

app.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.redirect('/login');
    } catch(error) {
        res.status(400).send("error registering new user");
    }
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/welcome', isAuthenticated, async (req, res) => {
    try {
        const user = await User.findById(req.session.userId);
        res.render('welcome', { user });
    } catch(error) {
        res.status(500).send('Error fetching user data');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/');
    });
});

app.use(async (req, res, next) => {
    if (req.session.userId) {
      try {
        req.user = await User.findById(req.session.userId);
        next();
      } catch (error) {
        next(error);
      }
    } else {
      next();
    }
});  
  
// To do functionality for user 
app.post('/add-todo', isAuthenticated, async (req, res) => {
    const { todoText } = req.body;
    console.log('User object:', req.user);
    console.log('Session:', req.session);
    const userId = req.user._id; // Assuming you have user info in req.user
  
    try {
      await User.findByIdAndUpdate(userId, {
        $push: { todos: { text: todoText, date: new Date() } }
      });
      res.redirect('/welcome');
    } catch (error) {
      console.error('Error adding todo:', error);
      res.status(500).send('Error adding todo');
    }
});

// Complete to do
app.post('/complete-todo/:todoId', isAuthenticated, async (req, res) => {
    const { todoId } = req.params;
    const userId = req.user._id;
  
    try {
      await User.updateOne(
        { _id: userId, "todos._id": todoId },
        { $set: { "todos.$.completed": true } }
      );
      res.redirect('/welcome');
    } catch (error) {
      console.error('Error completing todo:', error);
      res.status(500).send('Error completing todo');
    }
  });

// Remove a todo
app.post('/remove-todo/:todoId', isAuthenticated, async (req, res) => {
    const { todoId } = req.params;
    const userId = req.user._id;
  
    try {
      await User.updateOne(
        { _id: userId },
        { $pull: { todos: { _id: todoId } } }
      );
      res.redirect('/welcome');
    } catch (error) {
      console.error('Error removing todo:', error);
      res.status(500).send('Error removing todo');
    }
});

app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});
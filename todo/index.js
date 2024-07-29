const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});

let tasks = ["Get milk", "Get cheese", "Get bread"];
let favouriteFood = "Cheeseburger";

// Load UI GET homepage
app.get("/", (req, res) => {
    res.render("index", { tasks, favouriteFood });
});

// POST add task
app.post("/addtask", (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.redirect("/");
});

app.post("/removetask", (req, res) => {
    const completeTask = req.body.check;
    tasks.splice(tasks.indexOf(completeTask));
    res.redirect("/");
});

app.post("/changeFood", (req, res) => {
    const newFood = req.body.food;
    favouriteFood = newFood;
    res.redirect("/");
});

// POST remove task (complete)
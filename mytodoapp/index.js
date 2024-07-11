//require the just installed express app
var express = require('express');
//then we call express
var app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//placeholders for added task
let task = ["make dinner", "revise nodejs"];
//placeholders for removed task
let complete = ["buy cereal"];

//takes us to the root(/) URL
app.get('/', function (req, res) {
  //when we visit the root URL express will respond with 'Hello World'
  res.render("index", { task: task, complete: complete });
});

app.get('/viewTD', (req, res) => {
  res.render('viewTD');
});

//post route for adding new task 
app.post("/addtask", function(req, res) {
    var newTask = req.body.newtask;
    //add the new task from the post route
    task.push(newTask);
    res.redirect("/");
});

app.post("/removetask", function(req, res) {
    let completeTask = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        //check if the completed task already exits in the task when checked, then remove it
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});

//the server is listening on port 3000 for connections
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

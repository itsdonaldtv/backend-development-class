const express = require("express");
// Importing all the routes 
const homeRoute = require("./routes/home.js");
const loginRoute = require("./routes/login.js");
  
// Creating express server 
const app = express();

app.get("/", function(req, res) { 
    res.send("This is a get request!!\n"); 
}); 
app.post("/", function(req, res) { 
res.send("This is a post request!!\n"); 
}); 

app.put("/", function(req, res) { 
res.send("This is a put request!!\n"); 
}); 

app.get("/hey", function(req, res) { 
res.send("This is a get request to '/hey'!!\n"); 
}); 

// app.get(
//     "/", 
//     (req, res, next) => {
//         console.log("Hello terminal");
//         next();
//     },
//     (req, res) => {
//         res.send(`
//             <div>
//                 <h2>Welcome to Express, Equinim Learners</h2>
//                 <h5>Tutorial on Middleware</h5>
//             </div>`
//         );
//     }
// );

// Handling routes request 
app.use("/", homeRoute);
app.use("/", loginRoute);
app.listen((3000), () => { 
    console.log("Server is Running");
}) 
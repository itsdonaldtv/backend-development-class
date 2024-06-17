// Importing the module 
const express = require("express") 
  
// Creating express Router 
const router = express.Router() 
  
// Handling login request 
router.get("/login", (req, res, next)=>{ 
  res.send("This is the login request") 
}) 

module.exports=router
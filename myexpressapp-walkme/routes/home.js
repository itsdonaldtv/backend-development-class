const express = require("express");
const router = express.Router();

// Handling the router request
router.get('/home', (request, response, next) => {
        response.send("This is home");
    }
);

module.exports = router;
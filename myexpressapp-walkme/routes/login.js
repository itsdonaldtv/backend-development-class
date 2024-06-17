const express = require("express");

const router = express.Router();

router.get('/login', (request, response, next) => {
    response.send("Login");
});

module.exports = router;
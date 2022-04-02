const express = require("express");
const app = express();
app.use(express.json());
const path = require('path');


const courseController = require("./controllers/course.contrller");
const userController = require("./controllers/user.controller");
const register = require("./controllers/signup.controller");
const login = require("./controllers/login.controller");

app.use("/login",login);
app.use("/register",register);
app.use("/courses",courseController);
app.use("/user",userController);


app.use(express.static(__dirname + '/frontend'));
app.get('/homepage', function(req, res) {
  res.sendFile(path.join(__dirname , "/homepage/index.html"));
});


module.exports = app;

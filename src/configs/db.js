const mongoose = require("mongoose");

module.exports = () =>{
    mongoose.connect("mongodb+srv://abhijeet:abhijeet@cluster0.7yn1m.mongodb.net/pluralsight");
};
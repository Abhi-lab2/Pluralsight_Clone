const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../module/user.module")
const jwt = require('jsonwebtoken');
// require('dotenv').config();
const router = express.Router();


const generateToken = (user) => {
    return jwt.sign({user}, "pluralsight");
};
router.post("",body("first_name")
.trim()
.not()
.isEmpty()
.withMessage("First Name cannot be empty")
.isLength({ min: 4 })
.withMessage("First Name must be at least 4 characters"),
body("email")
.isEmail()
.withMessage("Enter a valid email"),
async (req, res) => {
    try{

        let user = await User.findOne({email : req.body.email})

        if(user){
            return res.status(400).send({message : "Email already exists" })
        }
        user = await User.create(req.body);

        const token = generateToken(user)
        return res.status(200).send({user, token});
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}); 


module.exports = router;
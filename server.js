require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override');
const { application } = require("express");
const app = express();
const port = 3001;
const path = require('path');
const User = require ('./src/models/User.js');
const UserInfo = require("./src/models/User.js");

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
//induces order 
    //use 
    //set
    //engine
    //delete
    //put
    //post
    //get
    //listen
//

// creates a new middle ware function to override
// the req method property with a new value
app.use(methodOverride("_method"));
//app.use(express.static("public")); // serve files from public statically
//app.use('/public', express.static('public'));
app.use(express.static(__dirname + '/public')); // Keep

//parsing incomming requests
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
});

//
app.set("view engine", "jsx");
mongoose.set("strictQuery", true);
app.engine("jsx", 
require("express-react-views").createEngine());

// setting up Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 
mongoose.connection.once("open", () => {
    console.log("connected to Mongo");
});

// root url
app.get("/", (req, res) => {
    res.render('Main');
});

// index route
app.get("/User", (req, res) => {
    User.find({}, (error, tex) => {
        res.render('Index', {
            Users : tex
        });
    });
});

// about route
app.get("/About", (req, res) => {
    res.render('About');
});

app.get("/Contact", (req, res) =>{
    res.render('Contact');
});

app.get("/Git", (req, res) =>{
    res.render('Git');
});

app.get("/YouTube", (req, res) =>{
    res.redirect('https://www.youtube.com/channel/UC32XOq64gUdQQv_MzY6t17w');
});

// Show page for my LinkedIn
app.get("/User/:id", (req, res) =>{
    User.findById(req.params.id, (err, foundUser) =>{
    let newUser = foundUser;
    let ln = newUser.linkedIn;
        res.redirect(`https://www.${ln}/`);
    });
});

app.listen(port, () => {
    console.log("listening");
});
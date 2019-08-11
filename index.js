const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser')
const passport = require('passport')

//bring all routes
let auth = require("./routes/api/auth");
let questions = require("./routes/api/question")
let prfile = require("./routes/api/profile")


const app = express();

//Middleware for Body-parser
app.use(bp.urlencoded({
    extended: false
}));
app.use(bp.json());

//mongoDB Config

const db = require('./setup/myURL').mongoURL

//Attempt to connect DB
mongoose
    .connect(db)
    .then(() => console.log("Hay Santheep Database is connected Now"))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Config for Jwt strategy
require('./strategies/jsonwtStrategy')(passport)


//Basic route for test
app.get('/', (req, res) => {
    res.send('Hey there Big stack');
});

//Actual routes
app.use('/api/auth', auth)
app.use("/api/questions", questions)
app.use('/api/profile', prfile)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is Running at ${port}`));
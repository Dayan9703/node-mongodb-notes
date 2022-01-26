const express = require('express');
const path = require('path');

//Initialization
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, '/views'));

//Middleware
app.use(express.urlencoded({ extended: false }));

// Global variables


// Routes
app.get('/', (req, res) => {
    res.send('Hello world');
})

// Static files


module.exports = app;
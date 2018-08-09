/**
 * Main App file App.js
 * @author Joshim Uddin
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');

// set up express app
const app = express();

// MongoDB configuration
mongoose.connect('mongodb://localhost/tshirt', (err, res) => {
    if(err) console.log('Database Error: ' + err);
    else console.log('Connected to Database');
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

// initialize routes
require('./routes/tshirt')(app);

// Error handling Middleware

// listen for request
const port = process.env.port || 6300;
app.listen(port, () => {
    console.log('Magic happens on port %d', port);
});


// testing routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
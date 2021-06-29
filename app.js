const express = require('express');
const data = require('./database/db');
 
// create express app
const app = express();
 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
 
// parse requests of content-type - application/json
app.use(express.json())
 
const mongoose = require('mongoose');
 
mongoose.Promise = global.Promise;
data.connect();
 
// define a simple route
app.get('/', (req, res) => {
 res.json({"message": "Welcome to ExpressInMemoryDB application."});
});
 
require('./routes/user.routes')(app);
 
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
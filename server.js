// package dependencies
let express = require("express");                       // express server
let logger = require("morgan");                         // logger
let mongoose = require("mongoose");                     // mongoose for mongodb

// app PORT
var PORT = process.env.PORT || 8080;

// TODO: add connection to mongodb server via mongoose

// Initialize Express
let app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// assign routes
require("./controller/routes")(app);

// listen events at PORT
app.listen(PORT, function() {
    console.log("app listening on PORT " + PORT);
})
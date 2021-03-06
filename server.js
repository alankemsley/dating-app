// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Set up Express to server static files
app.use(express.static('public'));

// Listener
app.listen(PORT, function() {
  console.log("App listening on port: " + PORT);
});

// Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Dependencies
var path = require("path");

// Routing
module.exports = function(app) {
  // HTML GET request for quiz.html
  app.get('/quiz', function(req, res){
    res.sendFile(path.join(__dirname, "../public/quiz.html"));
  });
  // HTML GET request for home.html
  app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

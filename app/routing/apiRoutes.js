// Load data
var matchesData = require("../data/matchesData");

// Routing
module.exports = function(app) {
  // API GET request
  app.get("/api/matches", function(req, res) {
    res.json(matchesData);
    res.send(matchesData);
  });

  // API POST request
  app.post("/api/matches", function(req, res) {
    matchesData.push(req.body);
    res.json(matchesData);
  });
  
};

// Load data
var matches = require("../data/matches");

// Routing
module.exports = function(app) {
  // API GET request
  app.get("/api/matches", function(req, res) {
    res.json(matches);
  });

  // API POST request
  app.post("/api/matches", function(req, res) {
    matches.push(req.body);
    currentMatchScore = 10;
    for (i=0; i<matches.length; i++) {
      findMatch(req.body, matches[i]);
    }
    res.json(matches);
  });
};

// Match-making logic
var findMatch = function(user, match) {
  matchScore = 0;
  for (i=0; i<match.scores.length; i++) {
    matchScore += Math.abs(match.scores[i] - user.scores[i]);
  }
  getMatch(match, matchScore);
};

var getMatch = function(match, thisMatchScore) {
  if (thisMatchScore > currentMatchScore) {
    currentMatchScore = thisMatchScore;
    currentMatch = match;
    return (currentMatch);
  }
};

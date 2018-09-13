var db = require("../models");

module.exports = function(app) {
  // Load index page
// Dependencies
// =============================================================
var path = require("path");


  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./pages/homepage.html"));
  });

  // Route to the group search page
  app.get("/groupSearch", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/groupSearch.html"));
  });

  // Route to the champions page
  app.get("/champions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/champions.html"));
  });

  // Route to the updates page
  app.get("/updates", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/updates.html"));
  });

  // Route to the players page
  app.get("/players", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/players.html"));
  });

  // blog route loads tier list
  app.get("/tierList", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tierList.html"));
  });


};

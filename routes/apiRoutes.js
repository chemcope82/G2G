var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.users.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all teams
  app.get("/api/teams", function(req, res) {
    db.teams.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.users.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Create a new team
  app.post("/api/teams", function(req, res) {
    db.teams.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Delete an team by name
  app.delete("/api/teams/:id", function(req, res) {
    db.teams.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });

  // Delete an user by name
  app.delete("/api/users/:id", function(req, res) {
    db.teams.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });

  // If a user sends data to add a new character...
  app.post("/api/newChamp", function(req, res) {
    // Take the request...
    //var character = req.body;

    clickedHero = req.body.newChamp;
    console.log("clickedHero", clickedHero);

    // Create a routeName

    // Then add the character to the database using sequelize
    res.json(true);

  });
};


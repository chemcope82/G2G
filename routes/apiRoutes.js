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
    db.users.create({
      user_name: req.body.user_name,
      team_name: req.body.team_name,
      skill_level: req.body.skill_level,
      primary_role: req.body.primary_role,
      secondary_role: req.body.secondary_role,
      tactical_role: req.body.tactical_role,
      top_hero_name: req.body.top_hero_name,
      secondary_hero_name: req.body.secondary_hero_name
    }).then(function(results){
      res.json(results);
    });
      
  });

  // Create a new team
  app.post("/api/teams", function(req, res) {
    db.teams.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/updateTeam", function(req, res){
    db.teams.update({top: req.body.top}, {
      where: {
        id: req.body.id,

      }
    }).then(function(results){
      res.json(results);
      console.log("do i run?");
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


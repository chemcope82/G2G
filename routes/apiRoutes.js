var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
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


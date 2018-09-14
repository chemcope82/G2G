module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    user_name: DataTypes.STRING,
    team_name: DataTypes.STRING,
    skill_level: DataTypes.INTEGER,
    primary_role: DataTypes.STRING,
    secondary_role: DataTypes.STRING,
    tactical_role: DataTypes.STRING,
    top_hero_name: DataTypes.STRING,
    secondary_hero_name: DataTypes.STRING, 
  },{
      timestamps: false
  });
  return users;
};



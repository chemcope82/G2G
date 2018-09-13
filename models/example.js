module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    user_name: DataTypes.STRING,
    team_name: DataTypes.STRING,
    skill_level: DataTypes.INTEGER,
    primary_role: DataTypes.STRING,
    secondary_role: DataTypes.STRING,
    tactical_role: DataTypes.STRING,
    top_hero_name: DataTypes.STRING,
    secondary_hero_name: DataTypes.STRING
  });
  return users;
};


module.exports = function(sequelize, DataTypes) {
  var teams = sequelize.define("teams", {
    team_name: DataTypes.STRING,
    role1: DataTypes.BOOLEAN,
    top: DataTypes.STRING,
    role2: DataTypes.BOOLEAN,
    jungler: DataTypes.STRING,
    role3: DataTypes.BOOLEAN,
    mid: DataTypes.STRING,
    role4: DataTypes.BOOLEAN,
    adc: DataTypes.STRING,
    role5: DataTypes.BOOLEAN,
    support: DataTypes.STRING,
  });
  return teams;
};

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
    },{
        timestamps: false
    });
return teams;
};
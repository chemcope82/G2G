CREATE DATABASE LoLDB;

USE LoLDB;

CREATE TABLE users(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
user_name VARCHAR(25) NOT NULL,
team_name VARCHAR(25),
skill_level INTEGER(10) DEFAULT 1,
primary_role VARCHAR(25),
secondary_role VARCHAR(25),
tactical_role VARCHAR(25),
top_hero_name VARCHAR(25),
secondary_hero_name VARCHAR(25),
PRIMARY KEY(id)
);

SELECT * FROM users;

CREATE TABLE teams(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
team_name VARCHAR(25),
role1 BOOLEAN,
top VARCHAR(25),
role2 BOOLEAN,
jungler VARCHAR(25),
role3 BOOLEAN,
mid VARCHAR(25),
role4 BOOLEAN,
adc VARCHAR(25),
role5 BOOLEAN,
support VARCHAR(25),
PRIMARY KEY(id)
);

SELECT * FROM teams;
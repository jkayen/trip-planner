const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/trip-planner');

 module.exports = db;

const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


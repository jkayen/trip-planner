const Sequelize = require('sequelize');
// For Jacob's Computer
const db = new Sequelize('postgres://localhost:5432/trip-planner');

// // For Samir's Computer
// const db = new Sequelize('trip-planner', 'wikistack', 'wikistack', {
//   host: 'localhost',
//   dialect: 'postgres',
//   logging: false
// });

 module.exports = db;

const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);





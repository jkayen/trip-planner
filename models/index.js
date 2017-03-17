const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/DB_NAME');

const MODEL = db.define('model', {
  COLUMN: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  getterMethods: {}
});

module.exports = {
  MODEL: MODEL
}

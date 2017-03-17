const db = require('./index.js');

const Place = db.define('place', {
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING(2),
      allowNull: false,
      set: function (string) {
        this.setDataValue('state', string.toUpperCase())
      }
    },
    phone: {
      //#TODO: See if we can normalize phone numbers in the setter.
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.ARRAY(Sequelize.FLOAT),
    }
  }
);

modules.exports = Place;
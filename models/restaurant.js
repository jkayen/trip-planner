const db = require('./index.js');

const Restaurant = db.define('restaurant', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  cuisine: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      set: function (value) {
        let arrayOfCuisines;
        if (typeof value === 'string'){
          arrayOfCuisines = value.split(',').map(s => s.trim());
          this.setDataValue('cuisine', arrayOfCuisines)
        } else {
          this.setDataValue('cuisine', arrayOfCuisines);
        }
      }
    },
  price: {
      type: Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 5
    }
  }
});

module.exports = Restaurant;

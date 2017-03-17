const db = require('./index.js');

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1,
      max: 5
    }
  },
  amenities: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    set: function (value) {
      let arrayOfAmenities;
      if (typeof value === 'string'){
        arrayOfAmenities = value.split(',').map(s => s.trim());
        this.setDataValue('amenities', arrayOfAmenities)
      } else {
        this.setDataValue('amenities', arrayOfAmenities);
      }

    }
  }
}
);

module.exports = Hotel;

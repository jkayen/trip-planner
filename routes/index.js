'use strict'

const router = require('express').Router();
const Hotels = require('../models/hotel');
const Restaurants = require('../models/restaurant');
const Activities = require('../models/activity');

router.get('/', (req, res, next) => {
  Promise.all([
    Hotels.findAll(),
    Restaurants.findAll(),
    Activities.findAll()
  ])
    .then(values => res.render('index', {
      hotels: values[0],
      restaurants: values[1],
      activities: values[2]
    }));
});

module.exports = router;

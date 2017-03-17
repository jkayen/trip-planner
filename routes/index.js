'use strict'

const router = require('express').Router()

router.get('/', (req, res, next) => {
  // next(new Error("you're an idiot"));
  // res.render('index');
});

module.exports = router;

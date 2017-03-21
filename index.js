'use strict'
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const db = require('./models');

const routes = require('./routes');
// make the top-level app
const app = express();
// logging
app.use(morgan('dev'));
// nunjucks boilerplate
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });
// body-parser boilerplate
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false } ));

// static path for our css
app.use(express.static(path.join(__dirname, '/public')));
app.use('/bootstrap',express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery',express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.use(routes);
// 404 catcher
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send('ERROR');
});

// listen function
db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('listening on port 3000');
    })
  })
  .catch(err => console.error(err));






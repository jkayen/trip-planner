'use strict'
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const db = require('./models');

const routes = require('./routes');
const app = express();


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false } ));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, '/public')));
app.use('/bootstrap',express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery',express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.use(routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send('ERROR');
});

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('listening on port 3000');
    })
  })
  .catch(err => console.error(err));






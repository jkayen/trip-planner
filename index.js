'use strict'
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const routes = './routes';
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false } ));
app.use(bodyParser.json());

app.use(routes);
app.use(express.static.join(__dirname, 'public'));

app.listen(3000, () => console.log('listening on port 3000'));

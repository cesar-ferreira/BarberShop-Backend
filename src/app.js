'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const serviceRoute = require('./routes/service-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use('/', indexRoute);
app.use('/service', serviceRoute);


module.exports = app;
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conectando ao banco
mongoose.connect('mongodb://admin:admin#123@ds018498.mlab.com:18498/db-barbershop');
// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const serviceRoute = require('./routes/service-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use('/', indexRoute);
app.use('/service', serviceRoute);


module.exports = app;
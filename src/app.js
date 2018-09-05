'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const router = express.Router();

//Conectando ao banco

mongoose.connect('mongodb://admin.documents.azure.com:10255/db-barbershop?ssl=true', {
    auth: {
        user: 'admin',
        password: 'admin#123'
    }
})
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

// Carregar os Models
const Service = require('./models/service');

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const serviceRoute = require('./routes/service-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', indexRoute);
app.use('/service', serviceRoute);
app.use('/swagger-ui.html', express.static(__dirname + '/public/api-docs'));

require('./public/swagger')(app);
module.exports = app;
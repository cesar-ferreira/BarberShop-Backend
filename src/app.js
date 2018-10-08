'use strict';

const express = require('express');

const app = express();

const setupGraphQL = require('./setup/graphql');
const setupModules = require('./setup/loadModules');

setupGraphQL(app);
setupModules(app);

// Carregar os Models

// Carregar as Rotas

app.use('/swagger-ui.html', express.static(__dirname + '/public/api-docs'));

//User.create({ name: 'Claudio',username : 'cesar', email: 'claudio@rocketseat.com.br', dateOfBirth: '1993-09-25 21:42:10.946 +00:00', password: '123456' });

/*
mutation{
    userCreate(name:"Eri", username:"eri",
        email:"eri@eri.com", dateOfBirth:"1993-09-25 21:42:10.946 +00:00",
        password:"123456789"){
        name
        username
        email
        dateOfBirth
    }
}
*/
require('./public/swagger')(app);
module.exports = app;
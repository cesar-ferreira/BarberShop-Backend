'use strict';

const express = require('express');

const app = express();

const { User } = require('./models');


const router = express.Router();

const setupGraphQL = require('./setup/graphql');
setupGraphQL(app);

// Carregar os Models

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const userRoute = require('./services/user/user-route');


//User.create({ name: 'Claudio',username : 'cesar', email: 'claudio@rocketseat.com.br', dateOfBirth: '1993-09-25 21:42:10.946 +00:00', password: '123456' });
/*
app.post('/register', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

*/
app.use('/', indexRoute);
app.use('/user', userRoute);
app.use('/swagger-ui.html', express.static(__dirname + '/public/api-docs'));

require('./public/swagger')(app);
module.exports = app;
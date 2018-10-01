// Imports
const bodyParser = require('body-parser');

// Load express modules
module.exports = function (server) {
    console.info('SETUP - Loading modules...');

    // Request body parser
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: false}));

};
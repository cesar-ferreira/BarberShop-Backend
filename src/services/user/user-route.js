'use strict';

const express = require('express');
const router = express.Router();

const controller = require('./user-controller.js');

/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *       - User
 *     description: Retrieve a string
 *
 */
router.get('/', controller.get);

module.exports = router;
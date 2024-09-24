const express = require('express');
const routerAuthor = require('./author.router');
const routerCountry = require('./country.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/authors', routerAuthor)
router.use('/countries', routerCountry)
module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);
router.get('/detalle/:id', controller.detail);

module.exports = router;
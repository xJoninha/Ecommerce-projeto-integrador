const express = require('express');
const router = express.Router();
const controller = require('../controller/pedidosController');


router.post('/', controller.createPedido);
router.get('/adega', controller.leiaPedido);


module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controller/pedidosController');

//router.get('/', controller.allProducts);
router.post('/', controller.createPedido);



module.exports = router;
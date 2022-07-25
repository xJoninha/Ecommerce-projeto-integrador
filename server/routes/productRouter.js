const express = require('express');
const router = express.Router();
const controller = require('../controller/ProdutosController');

router.get('/', controller.allProducts);
router.get('/detail/:id', controller.getProduct);

module.exports = router; 
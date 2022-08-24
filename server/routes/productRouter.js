const express = require('express');
const router = express.Router();
const controller = require('../controller/ProdutosController');

router.get('/', controller.allProducts);
router.get('/produto/:id', controller.getProduct);
router.get('/adega', controller.adega);

//1º Rota para direcionar o buscador; para testar põe 127.0.0.1/produtos/busca (ver em app.js o porque de produtos)
router.get('/busca', controller.busca);

router.get("/vitrine/:id", controller.vitrine);

module.exports = router;
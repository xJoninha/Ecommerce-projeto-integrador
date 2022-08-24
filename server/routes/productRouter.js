const express = require('express');
const router = express.Router();
const controller = require('../controller/ProdutosController');

router.get('/', controller.allProducts);
router.get('/produto/:id', controller.getProduct);
router.get('/adega', controller.adega);

//1º Rota para direcionar o buscador; para testar põe 127.0.0.1/produtos/busca (ver em app.js o porque de produtos)
router.get('/busca', controller.busca);

router.get("/vitrine/:id", controller.vitrine);
router.get('/vitrine-tinto', controller.vitrineTinto);
router.get('/vitrine-branco', controller.vitrineBranco);
router.get('/vitrine-rose', controller.vitrineRose);
router.get('/vitrine-espumante', controller.vitrineEspumante);

module.exports = router;
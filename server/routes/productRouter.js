const express = require('express');
const router = express.Router();
const controller = require('../controller/ProdutosController');

router.get('/', controller.allProducts);
router.get('/produto/:id', controller.getProduct);
router.get('/adega', controller.adega);
router.get('/vitrine-tinto', controller.vitrineTinto);
router.get('/vitrine-branco', controller.vitrineBranco);
router.get('/vitrine-rose', controller.vitrineRose);
router.get('/vitrine-espumante', controller.vitrineEspumante);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controller/ProdutosController');
const IndexController = require('../controller/IndexController');

router.get('/', controller.allProducts);
router.get('/detail/:id', controller.getProduct);
router.get('/vitrine-tinto', IndexController.vitrineTinto);
router.get('/vitrine-branco', IndexController.vitrineBranco);
router.get('/vitrine-rose', IndexController.vitrineRose);
router.get('/vitrine-espumante', IndexController.vitrineEspumante);

module.exports = router;  
var express = require('express');
var router = express.Router();
const IndexController = require('../controller/IndexController');

/* GET home page. */
// router.get('/', controlerotaindex.chamaindex);
 
router.get('/', IndexController.home);
router.get('/vitrine-tinto', IndexController.vitrineTinto);
router.get('/vitrine-branco', IndexController.vitrineBranco);
router.get('/vitrine-rose', IndexController.vitrineRose);
router.get('/vitrine-espumante', IndexController.vitrineEspumante);
router.get('/produto', IndexController.paginaProduto);
router.get('/adega', IndexController.adega);

module.exports = router;

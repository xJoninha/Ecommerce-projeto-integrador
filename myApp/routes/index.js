var express = require('express');
<<<<<<< HEAD
const router = express.Router();
const IndexController = require('../controller/IndexController'); 
=======
var router = express.Router();
const objetoController = require('../controller/IndexController');
const IndexController = objetoController.IndexController;           //vem do mesmo controller
const controllerBebidas = objetoController.controllerBebidas;       //vem do mesmo controller


//ROTAS
>>>>>>> main

router.get('/', IndexController.home);
router.get('/vitrine-tinto', IndexController.vitrineTinto);
router.get('/vitrine-branco', IndexController.vitrineBranco);
router.get('/vitrine-rose', IndexController.vitrineRose);
router.get('/vitrine-espumante', IndexController.vitrineEspumante);
router.get('/produto', IndexController.paginaProduto);

router.get('/produto/:id', controllerBebidas.show);

router.get('/adega', IndexController.adega);
router.get('/sobre', IndexController.sobre);
router.get('/politicaPrivacidade', IndexController.politicaPrivacidade);
router.get('/termosUso', IndexController.termosUso);

module.exports = router;

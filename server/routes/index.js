var express = require('express');
const router = express.Router();
const IndexController = require('../controller/IndexController');           //vem do mesmo controller
const controllerBebidas = require('../controller/IndexController');       //vem do mesmo controller


//ROTAS

router.get('/', IndexController.home);
router.get('/produto', IndexController.paginaProduto);

// router.get('/produto/:id', controllerBebidas.show);

router.get('/adega', IndexController.adega);
router.get('/sobre', IndexController.sobre);
router.get('/politicaPrivacidade', IndexController.politicaPrivacidade);
router.get('/termosUso', IndexController.termosUso);

module.exports = router;

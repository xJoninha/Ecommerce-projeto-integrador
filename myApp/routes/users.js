const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');
const controller = require('../controller/controllerUsers');
const validateRegister = require('../middlewares/validateRegister');
 
router.get('/cadastro', controller.index); 
router.post('/cadastro', validateRegister, controller.register); 
router.get('/excluir', controller.listaExcluir);
router.post('/excluir', controller.excluir);



module.exports = router; 
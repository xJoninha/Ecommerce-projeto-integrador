const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerUsers');

router.get('/', controller.index);

router.get('/:id/editar', controller.listaEditar);
router.put('/:id/editar', controller.editar);



module.exports = router; 
const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');
const controller = require('../controller/controllerFormulario');

const validateRegister = [
    body('email').notEmpty().withMessage('Campo "E-mail" obrigatório.').bail().isEmail().withMessage('E-mail inválido.')
]
 
router.get('/', controller.index); 
router.post('/', validateRegister, controller.register); 


module.exports = router;
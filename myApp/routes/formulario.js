const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');
const controller = require('../controller/controllerFormulario');

const validateRegister = [
    body('email').notEmpty().withMessage('O campo "E-mail" é obrigatório.').bail().isEmail().withMessage('E-mail inválido.'),
    body('cpf').notEmpty().withMessage('O campo "CPF" é obrigatório.').bail().isNumeric().withMessage('CPF inválido.')
]
 
router.get('/', controller.index); 
router.post('/', validateRegister, controller.register); 


module.exports = router;
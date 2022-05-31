const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');
const controller = require('../controller/controllerFormulario');

const validateRegister = [
    body('email').notEmpty().withMessage('O campo "E-mail" é obrigatório.').bail().isEmail().withMessage('E-mail inválido.'),
    body('cpf').notEmpty().withMessage('O campo "CPF" é obrigatório.').bail().isNumeric().withMessage('CPF inválido.'),
    body('name').notEmpty().withMessage('O campo "Nome" é obrigatório.').bail().isAlpha().withMessage('Nome inválido.'),
    body('last_name').notEmpty().withMessage('O campo "Sobrenome" é obrigatório.').bail().isAlpha().withMessage('Sobrenome inválido.'),
    body('birthday').notEmpty().withMessage('O campo "Data de Nascimento" é obrigatório.').bail().isDate().withMessage('Data inválida.'),
    body('age').notEmpty().withMessage('Somente maiores de 18 anos podem se registrar.'),
    body('telephone').notEmpty().withMessage('O campo "Telefone celular" é obrigatório.').bail().isMobilePhone().withMessage('Número inválido.'),
    body('destinatario').notEmpty().withMessage('O campo "Destinatário" é obrigatório.').bail().isAlpha().withMessage('Destinatário inválido.'),
    body('cep').notEmpty().withMessage('O campo "CEP" é obrigatório.').bail().isNumeric().withMessage('Número inválido.'),
    body('logradouro').notEmpty().withMessage('O campo "Logradouro" é obrigatório.'),
    body('cidade_bairro').notEmpty().withMessage('O campo "Cidade e Bairro" é obrigatório.').bail().isAlphanumeric().withMessage('Cidade e/ou bairro inválido.'),
    body('numero').notEmpty().withMessage('O campo "Número" é obrigatório.').bail().isNumeric(),
    body('complemento').isAlphanumeric().withMessage('Complemento inválido.'),
    body('password').notEmpty().withMessage('O campo "Senha" é obrigatório.').bail().isStrongPassword().withMessage('Senha muito fraca.'),
    body('confirm_password').notEmpty().withMessage('O campo "Confirmar Senha" é obrigatório.'),
    body('terms').notEmpty().withMessage('É necessário preencher este campo.')


]
 
router.get('/', controller.index); 
router.post('/', validateRegister, controller.register); 


module.exports = router;
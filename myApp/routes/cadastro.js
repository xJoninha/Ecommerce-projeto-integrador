const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');
const controller = require('../controller/UsersController');
const validateRegister = require('../middlewares/validateRegister');

router.get('/', controller.form); 
router.post('/', validateRegister, controller.register);  



module.exports = router;
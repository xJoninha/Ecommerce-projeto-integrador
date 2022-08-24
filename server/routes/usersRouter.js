// const validateRegister = require('../middlewares/validateRegister');
const express = require('express');
const router = express.Router();
const userController = require('../controller/UsersController');
const autenticationMiddleware = require('../middlewares/autentication')
const adminMiddleware = require('../middlewares/admin')



router.get('/cadastro', userController.register)
router.post('/cadastro', userController.add)

router.get('/login', userController.login)
router.post('/login', autenticationMiddleware, userController.autentication)
router.get('/logout', userController.logout)

module.exports = router;   
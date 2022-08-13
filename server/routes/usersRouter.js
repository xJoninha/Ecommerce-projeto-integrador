// const validateRegister = require('../middlewares/validateRegister');

const express = require('express');
const router = express.Router();
const userController = require('../controller/UsersController');
const middlewareAutentication = require('../middlewares/autentication')



router.get('/cadastro', userController.register)
router.post('/cadastro', userController.add)

router.get('/login', userController.login)
router.post('/login', middlewareAutentication, userController.autentication)
router.get('/logout', userController.logout)

router.get('/', userController.allUsers);
router.get('/:id', userController.userDetail)

router.get('/:id/excluir', userController.destroy)
router.get('/:id/editar', userController.update);

router.post('/:id/editar', userController.edit);



module.exports = router;   
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

// router.get('/', adminMiddleware, userController.allUsers);
// router.get('/:id', adminMiddleware, userController.userDetail)

// router.get('/:id/editar', adminMiddleware, userController.update);
// router.post('/:id/editar', adminMiddleware, userController.edit);

// router.get('/:id/excluir', adminMiddleware, userController.destroy)


module.exports = router;   
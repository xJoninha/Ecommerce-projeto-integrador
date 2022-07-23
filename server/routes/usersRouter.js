// const validateRegister = require('../middlewares/validateRegister');

const express = require('express');
const router = express.Router();
const controller = require('../controller/UsersController');
const loginAutentication = require('../middlewares/autentication')



router.get('/cadastro', controller.register)
router.post('/cadastro', controller.add)

router.get('/login', controller.login)
router.post('/login', loginAutentication, controller.autentication)
router.get('/logout', controller.logout)

router.get('/', controller.allUsers);
router.get('/:id', controller.userDetail)

router.get('/:id/excluir', controller.destroy)
router.get('/:id/editar', controller.update);

router.post('/:id/editar', controller.edit);





module.exports = router;   
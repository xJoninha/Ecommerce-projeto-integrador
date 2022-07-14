const express = require('express');
const router = express.Router();
const controller = require('../controller/UsersController');
const validateRegister = require('../middlewares/validateRegister');


router.get('/', controller.index);

router.get('/:id', controller.showUser)

router.get('/:id/editar', controller.editForm);
router.put('/:id/editar', validateRegister, controller.edit);



module.exports = router;   
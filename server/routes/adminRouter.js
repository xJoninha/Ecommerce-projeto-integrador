const express = require('express'),
    router = express.Router(),
    userController = require('../controller/UsersController'),
    productsController = require('../controller/ProdutosController'),
    adminMiddleware = require('../middlewares/admin')

// administração de PRODUTOS
router.get('/produtos', adminMiddleware, productsController.allProductsAdmin)
router.get('/produtos/:id', adminMiddleware, productsController.ProductAdmin)

router.get('/produtos/:id/excluir', adminMiddleware, productsController.productDestroy)


// administração de USUARIOS
router.get('/usuarios', adminMiddleware, userController.allUsers)
router.get('/usuarios/:id', adminMiddleware, userController.userDetail)

router.get('/usuarios/:id/editar', adminMiddleware, userController.update)
router.post('/usuarios/:id/editar', adminMiddleware, userController.edit)

router.get('/usuarios/:id/excluir', adminMiddleware, userController.destroy)

module.exports = router;
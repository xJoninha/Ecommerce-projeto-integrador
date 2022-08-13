const express = require('express'),
    router = express.Router(),
    usersController = require('../controller/UsersController'),
    productsController = require('../controller/ProdutosController'),
    adminMiddleware = require('../middlewares/admin')


var express = require('express');
var router = express.Router();
const IndexController = require('../controller/IndexController');

/* GET home page. */
router.get('/', controlerotaindex.chamaindex);
 
router.get('/', IndexController.home);
router.get('/vitrine', IndexController.vitrine);

module.exports = router;

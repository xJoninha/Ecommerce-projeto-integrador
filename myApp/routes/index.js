var express = require('express');
var router = express.Router();
const controlerotaindex = require('../controller/controlerotaindex');

/* GET home page. */
router.get('/', controlerotaindex.chamaindex);

module.exports = router;

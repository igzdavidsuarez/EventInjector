var express = require('express');
var router = express.Router();

router.use('/test', require('./controller1/controller1'));

module.exports = router;
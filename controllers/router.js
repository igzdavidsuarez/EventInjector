var express = require('express');
var router = express.Router();

router.use('/test', require('./event/event'));

module.exports = router;
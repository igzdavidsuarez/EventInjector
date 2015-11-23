var express = require('express');
var router = express.Router();
var dbConnection = require('../../util/mysql.js');

router.get('/', function(req, res) {
    var query = 'SELECT * FROM ACTOR';

    dbConnection.query(query, function (err, rows, fields){
        if (err) throw err;

        res.send(rows);
    });
});

module.exports = router;
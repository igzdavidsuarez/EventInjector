var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', function(req, res) {

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'BDS_Poblacion_Banca'
    });

    connection.connect();

    connection.query('SELECT * FROM ACTOR', function(err, rows, fields) {
        if (err) throw err;

        res.send(rows);
    });

    connection.end();
});

module.exports = router;
var mysql = require('mysql');

module.exports = {
    query: query
};

function query(query, callback){

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'BDS_Poblacion_Banca'
    });

    connection.connect();

    connection.query(query, function(err, rows, fields) {
        if (err) return callback(err);

        return callback(err, rows, fields);
    });

    connection.end();
}
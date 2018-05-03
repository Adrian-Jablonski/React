// Fixes creating duplicate database object for some connection error
var promise = require('bluebird');
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/contactapp';
var db = pgp(connectionString);

var options = {
    promiseLib : promise
}

exports.database = db;
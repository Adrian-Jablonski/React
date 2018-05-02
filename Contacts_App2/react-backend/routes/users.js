var express = require('express');
var router = express.Router();
var promise = require('bluebird');
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/contactapp';
var db = pgp(connectionString);
var bodyParser = require('body-parser');

var options = {
    promiseLib : promise
}

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  db.any(`SELECT * FROM contacts`).then(function (userData) {
        res.json(userData);
        console.log("userData ");
    })
    
});



module.exports = router;
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var myDatabase = require('../util/database.js');

var db = myDatabase.database;

// var options = {
//     promiseLib : promise
// }



/* GET contacts listing. */
router.get('/', function(req, res, next) {
  db.any(`SELECT * FROM contacts`).then(function (userData) {
        res.json(userData);
        console.log("userData ");
    })
    
});



module.exports = router;
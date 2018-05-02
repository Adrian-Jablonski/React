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

router.get('/', function(req, res) {
    console.log("Form Submitted")
      
  });

router.post('/', function(req,res) {
    console.log(req.body.id);
    var id = req.body.id;
   
    db.any(`DELETE FROM contacts where id = $1`,[id]);
})

module.exports = router;
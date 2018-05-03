var express = require('express');
var router = express.Router();
var promise = require('bluebird');
// var pgp = require('pg-promise')(options);
// var connectionString = 'postgres://localhost:5432/contactapp';
// var db = pgp(connectionString);
var bodyParser = require('body-parser');

var myDatabase = require('../util/database.js');

var db = myDatabase.database;

var options = {
    promiseLib : promise
}

router.get('/', function(req, res) {
    console.log("Form Submitted")
      
  });

router.post('/', function(req,res) {
    console.log(req);
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;
    var zipcode = req.body.zipcode;

    db.none(`INSERT INTO contacts(name, email, phone, address, city, state, zipcode) VALUES ($1, $2, $3, $4, $5, $6, $7)`,[name, email, phone, address, city, state, zipcode]);
})

module.exports = router;
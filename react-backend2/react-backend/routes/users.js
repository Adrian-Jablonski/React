var express = require('express');
var router = express.Router();
var promise = require('bluebird');
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/reactusers';
var db = pgp(connectionString);
var bodyParser = require('body-parser');

var options = {
    promiseLib : promise
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
  //res.send('respond with a resource');
  // And insert something like this instead:
//   res.json([{
//       id: 1,
//       username: "samsepi0l"
//   }, {
//       id: 2,
//       username: "D0loresH4ze"
//   }]);

  db.any(`SELECT * FROM usernames`).then(function (userData) {
        res.json(userData);
        console.log(userData);
    })
    
});

router.post('/api', function(req, res, next) {
    db.any(`SELECT * FROM usernames`).then(function (userData) {
        res.json(userData);
        console.log(userData);
    })
})
module.exports = router;
var express = require('express');
var logger = require('morgan');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
 var clientDB=req.clientDB;
  
 clientDB.connect().then( function (result) {
      logger(result);
      var db = clientDB.db('MyDB');
      db.collection('user', function (err, collection) {

        collection.find().toArray(function (err, items) {
          if (err) throw err;
          console.log(items);
          res.render('index', {
            "userlist": items, "title": "User Management"
          });
        });

      });
      
    },function(error){
      logger("error"+error);
    });

});

/* GET userlist. */
router.get('/userlist', function (req, res) {
  var clientDB=req.clientDB;
  
 clientDB.connect().then( function (result) {
      //logger(result);
      // Get our form values. These rely on the "name" attributes
      var userName = req.body.username;
      var userEmail = req.body.useremail;

      var db = clientDB.db('MyDB');
      db.collection('user', function (err, collection) {

        collection.find().toArray(function (err, items) {
          if (err) throw err;
          console.log(items);
          res.render("userlist",{"userlist":items});
        });

      });

    },function(error){
      logger("error"+error);
    });
});




/* GET New User page. */
router.get('/newuser', function (req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function (req, res) {
  var clientDB=req.clientDB;
  
 clientDB.connect().then( function (result) {
      //logger(result);
      // Get our form values. These rely on the "name" attributes
      var userName = req.body.username;
      var userEmail = req.body.useremail;

      var db = clientDB.db('MyDB');

      var objuser = {
        "username": userName,
        "email": userEmail
      };
      // Submit to the DB
      db.collection('user').insertOne(objuser, (err, resp) => {
        if (err) {
          // If it failed, return error
          logger("There was a problem adding the information to the database.");
        }
        else {
          // And forward to success page
          logger("1 document inserted");
          res.redirect("/");
        }
      });
      
    },function(error){
      logger("error"+error);
    });

});
module.exports = router;

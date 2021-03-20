var express = require('express');
var logger = require('morgan');
const { ObjectId } = require('mongodb');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var userDetail={_id:null,username:null,email:null};
  res.render("users",{"title":"Update User","msg":"there is nothing too update","userDetail":userDetail});
});
/* GET users listing. */
router.get('/id/:id', function (req, res, next) { 
  var clientDB=req.clientDB;
  
  clientDB.connect().then( function (result) {
       //logger(result);
      // Get our form values. These rely on the "name" attributes
      var _id = req.params.id;
      var objuser = {
        "_id": new ObjectId(_id)
      };

      var db = clientDB.db('MyDB');
      db.collection('user', function (err, collection) {

        collection.findOne(objuser,function (err, item) {
          if (err) throw err;
          console.log(item);
          res.render("users",{"title":"Update User","msg":"Now you can update the record","userDetail":item});
        });

      });

    },function(error){
      logger("error"+error);
    });
});
/* GET userlist. */
router.get('/list', function (req, res) {
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
          res.json(items);
        });

      });

    },function(error){
      logger("error"+error);
    });
});



/* UPDATE to Add User Service */
router.post('/updateuser', function (req, res) {
  var clientDB=req.clientDB;
  
 clientDB.connect().then( function (result) {
      //logger(result);
      // Get our form values. These rely on the "name" attributes
      var _id = req.body.id;
      var userName = req.body.username;
      var userEmail = req.body.useremail;

      var db = clientDB.db('MyDB');
      var objuserquery = {
        "_id": new ObjectId(_id)
      };
      var objuser =  {
        "_id": new ObjectId(_id),
        "username": userName,
        "email": userEmail
         };
         var objuserModify = {$set: objuser};
      // Submit to the DB
      db.collection('user').updateOne(objuserquery,objuserModify,{ upsert: false }, (err, resp) => {
        if (err) {
          // If it failed, return error
          res.send({"msg":"There was a problem adding the information to the database."});
        }
        else {
           
          // And forward to success page
          res.render("users",{"title":"Update User","msg":resp.modifiedCount + " document updated","userDetail":objuser});
           
        }
      });

    },function(error){
      logger("error"+error);
    });

});

/* DELETE to deleteuser. */
router.delete('/deleteuser/:id', function (req, res) {

  var clientDB=req.clientDB;
  
  clientDB.connect().then( function (result) {
       //logger(result);
      // Get our record id from request parameter
      var _id = req.params.id;

      var db = clientDB.db('MyDB');

      var objuser = {
        "_id": new ObjectId(_id)
      };
      // Submit to the DB
      db.collection('user').deleteOne(objuser, (err, resp) => {
        if (err) {
          // If it failed, return error
          res.send({ "msg": "There was a problem adding the information to the database." });
        }
        else {
          // And forward to success page
          res.send({ "msg": resp.deletedCount + " document deleted" });
        }
      });


    },function(error){
      logger("error"+error);
    });

});
module.exports = router;

var express = require('express');
var logger = require('morgan');
const _ = require('lodash');
var router = express.Router();
const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');
const { ObjectId } = require('mongodb');
const fs = require("fs")


/* load uploaded files. */
router.get('/',  (req, res, next) => {
    var clientDB=req.clientDB;
     
    clientDB.connect().then( function (result) {
         logger("result",result);
         var db = clientDB.db('MyDB');
         db.collection('files', function (err, collection) {
   
           collection.find().toArray(function (err, items) {
             if (err) throw err;
             logger(items);
             res.render('fileuploads', {
               "filelist": items, "title": "File Upload","msg": "existing file list"
             } );
           });
   
         });
         
       },function(error){
         logger("error",error);
       });
   
   });

router.post('/upload', async  function(req, res) {
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    let isUploaderror=false;
    let uploads = [];
    let objfiles=Object.values(req.files);
    var arrayfile =[];
    if(Array.isArray(objfiles[0]))
    arrayfile=objfiles[0];
    else
    arrayfile.push(objfiles[0]);
  _.forEach(_.keysIn(arrayfile),(k)=> {
 
    let finalfilename=uuidv1()+"."+arrayfile[k].name.split('.').pop();
    let destinationfilepath= "./public/images/"+finalfilename;
    try{
        arrayfile[k].mv(destinationfilepath);
        var resobj={};    
        resobj={"name": arrayfile[k].name,"size":arrayfile[k].size,"mimetype": arrayfile[k].mimetype,"targetfilename":finalfilename ,"error":null}

        uploads.push(resobj);
        logger("resobj",resobj);

        //save in db collection
        var clientDB=req.clientDB;
     
        clientDB.connect().then(  (result)=> {
          logger("db connect",result);
          var db = clientDB.db('MyDB');
          var objuser = resobj;
         // Submit to the DB
         db.collection('files').insertOne(objuser, (err, resp) => {
           if (err) {
             // If it failed, return error
             logger("There was a problem adding the information to the database.");
           }
           else {
             // And forward to success page
             logger("1 document inserted");
           }
         });
          db.collection('files', function (err, collection) {
    
            collection.find().toArray(function (err, items) {
              if (err) throw err;
              console.log(items);
              res.render('fileuploads', {
                "filelist": items, "title": "File Upload"
              });
            });
    
          });
          
        },function(error){
          logger("error",error);
        });

      }catch(err){
        var resobj={};
        if (err) {
          resobj={"name": arrayfile[k].name,"size":arrayfile[k].size,"mimetype": arrayfile[k].mimetype,"targetfilename":finalfilename,"error":err}
          isUploaderror=true;
          uploads.push(resobj);
        } 
    }
  } // end for loop
);
 
res.render('fileuploads', {
  "filelist": uploads, "title": "File Upload", "msg":isUploaderror?"File uploading have error, please check the detail.":"File Uploaded successfully."
});
    
  });
 
module.exports = router;
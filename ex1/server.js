var createError = require('http-errors');
var express = require('express');
const fileUpload = require('express-fileupload');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Database

var MongoClient = require('mongodb').MongoClient;

const clientDB = new MongoClient('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true });


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); 
var fileuploadsRouter = require('./routes/fileuploads');
const { Console } = require('console');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// default options
app.use(fileUpload());

//Make our db accessible to our router
app.use(function (req, res, next) {
  req.clientDB = clientDB;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fileuploads', fileuploadsRouter); 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

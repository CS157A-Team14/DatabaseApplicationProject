var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./login'))



const mysql = require('mysql')
// use to connect database to nodejs.
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "IM"
});

// connection message display
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
  // Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server;
  // Alter user privileges to support mysql native password so that app.js wont throw
  // /usr/local/mysql/bin/mysql -u root -p
  // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
  
  /*
  SAMPLE MOCK QUERY: 
  connection.query('SELECT * from Items', function (error, results, fields) {
    if (error) {
      console.log('Query resulted in error:', error);
    } else {
      console.log('Query response:', results);
    }
  });
  */
});







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('Listening on 3001')

module.exports = app;



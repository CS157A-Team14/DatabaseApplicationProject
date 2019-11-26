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

const mysql = require('mysql')
// use to connect database to nodejs.
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root"
});



app.get('/home', (request ,response , next) => {
  /*
  connection.query('SELECT * FROM product', function(err, result){
    if(err) throw err
    response.status(200).jsonp(result)
  })
  */
 response.status(200);
})

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

module.exports = app;

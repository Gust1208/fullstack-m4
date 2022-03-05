var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); //trabaja con index.js
var usersRouter = require('./routes/users'); //trabaja con user.js

var aRouter = require('./routes/a'); // trabaja con a.js
var amazonasRouter = require('./routes/amazonas'); // trabaja con amazonas.js
var hamletRouter = require('./routes/hamlet'); // trabaja con hamlet.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/a', aRouter);
app.use('/amazonas', amazonasRouter);
app.use('/hamlet', hamletRouter);

app.get('/ruta1',function(req,res){
  res.send("Hola Mundo")
})

app.get('/ruta2',function(req,res){
  res.send("Siempre el primer programa de un nuevo legnuaje es: 'Hola Mundo'. Si no lo haces es mala suerte y nunca vas a poder programar!")
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

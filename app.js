var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 导入路由模块
var indexRouter = require('./routes/index');
var destinationRouter = require('./routes/destination');
var strategyRouter = require('./routes/strategy');
var communityRouter = require('./routes/community');
var ticketRouter = require('./routes/ticket');
var dataViewRouter = require('./routes/dataView');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 加载根路由模块
app.use('/', indexRouter);

//设置跨域请求
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// });

// 加载一级路由模块
app.use('/destination', destinationRouter);
app.use('/strategy', strategyRouter);
app.use('/community', communityRouter);
app.use('/ticket', ticketRouter);
app.use('/dataView', dataViewRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/users', usersRouter);

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

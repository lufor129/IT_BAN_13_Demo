var express = require('express');
var path = require('path');
var fs = require('fs')
var cookieParser = require('cookie-parser');
var morgan = require('morgan')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname,'logs', 'access.log'), { flags: 'a' })
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('common', { stream: accessLogStream }))

app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Credentials', false)
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

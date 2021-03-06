const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const session = require('express-session');
const expressValidator = require('express-validator');

// Mongoose Connect

const dbuser = 'sportsblog_user';
const dbpasswd = 'Sp0rtsBl0g';
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://'+dbuser+':'+dbpasswd+'@ds149412.mlab.com:49412/sportsblog', {
  useMongoClient: true
});
const db = mongoose.connection;




// routes
const index = require('./routes/index');
const articles = require('./routes/articles');
const categories = require('./routes/categories');
const manage = require('./routes/manage');

// init app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express messages
app.use(require('connect-flash')());
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req,res);
  next();
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
// app.use('/users', users);
app.use('/articles', articles);
app.use('/categories', categories);
app.use('/manage', manage);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Express Validator
  app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        const namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;

      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

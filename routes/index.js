var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET about page */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

/* ROUTE MODULES */
router.get('/articles', (req, res, next) => {
  res.render('articles', { title: 'Articles'} );
});
router.get('/categories', (req, res, next) => {
  res.render('categories', { title: 'Categories'} );
});router.get('/manage', (req, res, next) => {
  res.render('manage', { title: 'Manage'} );
});
module.exports = router;

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/manage', function(req, res, next) {
  res.render('manage', { title: 'Manage' });
});

router.get('/articles/add', (req,res,next) => {
  res.render('add_article', {title: 'Create Article'});
});

router.get('/categories/add', (req,res,next) => {
  res.render('add_category', {title: 'Create Category'});
});

module.exports = router;

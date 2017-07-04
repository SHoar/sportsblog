var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/articles', function(req, res, next) {
  res.render('articles', { title: 'Articles' });
});

/* Show Article by ID*/
router.get('/show/:id', (req,res,next) => {
  res.render('article', {title: 'Article'})
});

/* show Article Categories */
router.get ('/category/:category_id', (req,res,next) => {
  res.render('articles', {title: 'Category Articles'})
})

module.exports = router;

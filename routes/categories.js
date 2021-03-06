var express = require('express');
var router = express.Router();

Category = require('../models/Category.js')

/* GET categories */
router.get('/', function(req, res, next) {
  Category.getCategories( (err, categories) => {
    if(err){
      res.send(err);
    }
    res.render('categories', { 
      title: 'Categories',
      categories: categories 
    });
  });
});



module.exports = router;

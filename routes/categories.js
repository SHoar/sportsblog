var express = require('express');
var router = express.Router();

Category = require('../models/Category.js')

/* GET home page. */
router.get('/categories', function(req, res, next) {
  Category.getCategories((err,categories) => {
    if(err){
      res.send(err);
    }
    console.log(categories);
    res.render('categories', { 
      title: 'Categories',
      categories: categories
    });
  });
  
});



module.exports = router;

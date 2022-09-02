var express = require('express');
var router = express.Router();
const citiesRouter = require('./cities')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Amazing Events' });
});

router.use('/cities', citiesRouter)

module.exports = router;

var express = require('express');
var router = express.Router();

const citiesRouter = require('./cities')
const usersRouter = require('./usersLogin')
const itinerariesRouter = require('./itineraries.js')
const commentsRouter = require('./comments.js')
const activitiesRouter = require('./activities.js')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Amazing Events' });
});

router.use('/cities', citiesRouter)
router.use('/auth', usersRouter)
router.use('/itineraries', itinerariesRouter)
router.use('/comments', commentsRouter)
router.use('/activities', activitiesRouter)

module.exports = router;

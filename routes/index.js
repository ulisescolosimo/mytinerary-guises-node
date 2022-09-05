var express = require('express');
var router = express.Router();

const citiesRouter = require('./cities')
const usersRouter = require('./usersLogin')

router.get('/', function(req, res, next) {

});

router.use('/cities', citiesRouter)
router.use('/auth', usersRouter)

module.exports = router;

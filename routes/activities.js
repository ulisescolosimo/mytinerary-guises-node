var express = require('express');
var router = express.Router();

const {createActivity, readAllActivities} = require('../controllers/activityController')

router.get('/', readAllActivities)
router.post('/', createActivity);

module.exports = router;
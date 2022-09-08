var express = require('express');
var router = express.Router();

const {createActivity, readAllActivities, deleted} = require('../controllers/activityController')

router.get('/', readAllActivities)
router.post('/', createActivity);
router.delete('/:id', deleted);

module.exports = router;
var express = require('express');
var router = express.Router();

const {create, deleted, update, readAll} = require('../controllers/itineraryController')

router.post('/', create);
router.delete('/:id', deleted);
router.patch('/:id', update);
router.get('/', readAll)

module.exports = router;
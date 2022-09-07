var express = require('express');
var router = express.Router();

const {createIti, deleteIti, updateIti, readIti, readAll} = require('../controllers/itineraryController')

router.post('/', createIti);
router.delete('/:id', deleteIti);
router.patch('/:id', updateIti);
router.get('/', readIti)
router.get('/all', readAll)

module.exports = router;
var express = require('express');
var router = express.Router();
const {create, read, readAll, deleted, update, readCity} = require('../controllers/cityController')

router.get('/all/', readAll);
router.get('/', readCity)
router.post('/', create);
router.get('/:id', read);
router.delete('/:id', deleted);
router.patch('/:id', update);


module.exports = router;
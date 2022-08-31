var express = require('express');
var router = express.Router();
const {create, read, readAll, deleted, update} = require('../controllers/cityController')

router.post('/', create);
router.get('/', readAll);
router.get('/:id', read);
router.delete('/:id', deleted);
router.patch('/:id', update);


module.exports = router;
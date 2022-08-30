var express = require('express');
var router = express.Router();
const {create, read, readAll, deleted} = require('../controllers/cityController')

router.post('/', create);
router.get('/:id', read);
router.get('/', readAll);
router.delete('/:id', deleted);


module.exports = router;
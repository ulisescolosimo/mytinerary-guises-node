var express = require('express');
var router = express.Router();
const { getAllComments, createComment, deleted } = require('../controllers/commentController');

router.get('/', getAllComments);
router.post('/', createComment);
router.delete('/:id', deleted)

module.exports = router;
var express = require('express');
var router = express.Router();
const { readAllComments, createComment, deleted } = require('../controllers/commentController');

router.get('/', readAllComments);
router.post('/', createComment);
router.delete('/:id', deleted)

module.exports = router;
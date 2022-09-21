var express = require('express');
var router = express.Router();
const passport = require("../config/passport");

const { readAllComments, createComment, deleted, editComment } = require('../controllers/commentController');

router.get('/', readAllComments);
router.post('/:id', passport.authenticate('jwt', {session:false}), createComment);
/* router.patch('/:id', passport.authenticate('jwt', {session:false}), editComment); */
router.delete('/:id', deleted)

module.exports = router;
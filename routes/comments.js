var express = require('express');
var router = express.Router();
const passport = require("../config/passport");

const { readAllComments, createComment, deleted, modifyComment } = require('../controllers/commentController');

router.get('/', readAllComments);
router.post('/:id', passport.authenticate('jwt', {session:false}), createComment);
router.patch('/:id', passport.authenticate('jwt', {session:false}), modifyComment); 
router.delete('/:id',passport.authenticate('jwt', {session:false}) ,deleted)

module.exports = router; 
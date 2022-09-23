var express = require('express');
var router = express.Router();
const passport = require("../config/passport");

const {createIti, deleteIti, updateIti, readIti, readAll, likeDislike} = require('../controllers/itineraryController')

router.get('/', readIti)
router.get('/all', readAll)
router.post('/', createIti);
router.delete('/:id', deleteIti);
router.patch('/:id', updateIti);
router.patch('/like/:id', passport.authenticate('jwt', {session:false}), likeDislike)

module.exports = router;
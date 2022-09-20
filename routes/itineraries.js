var express = require('express');
var router = express.Router();
const passport = require('passport');


const {createIti, deleteIti, updateIti, readIti, readAll, likeDislike} = require('../controllers/itineraryController')

router.post('/', createIti);
router.delete('/:id', deleteIti);
router.patch('/:id', updateIti);
router.get('/', readIti)
router.get('/all', readAll)
router.patch('/likes', passport.authenticate('jwt', {session:false}), likeDislike);

module.exports = router;
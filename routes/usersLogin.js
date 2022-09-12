var express = require('express');
var router = express.Router();
const {signUp, getUsers, deleteUser, verifyMail, signIn} = require('../controllers/userController')

router.post('/signup', signUp);
router.post('/signin', signIn)
router.get('/', getUsers);
router.get('/verify/:code', verifyMail)
router.delete('/:id', deleteUser)

module.exports = router;
const { Router } = require('express');
var express = require('express');
var router = express.Router();
const {signUp, getUsers, deleteUser, verifyMail, signIn, signOut, verifyToken} = require('../controllers/userController')

router.patch('/:id', signOut)
router.post('/signup', signUp);
router.post('/signin', signIn)
router.get('/', getUsers);
router.get('/verify/:code', verifyMail)
router.delete('/:id', deleteUser)


module.exports = router;
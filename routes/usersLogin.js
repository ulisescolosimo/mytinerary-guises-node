var express = require('express');
var router = express.Router();
const {signUp, getUsers, deleteUser, verifyMail} = require('../controllers/userController')

router.post('/signup', signUp);
router.get('/', getUsers);
router.delete('/:id', deleteUser)
router.get('/verify/:code', verifyMail)

module.exports = router;
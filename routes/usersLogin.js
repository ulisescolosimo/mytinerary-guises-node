var express = require('express');
var router = express.Router();
const {signUp, getUsers, deleteUser} = require('../controllers/userController')

router.post('/signup', signUp);
router.get('/', getUsers);
router.delete('/:id', deleteUser)

module.exports = router;
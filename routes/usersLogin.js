var express = require('express');
var router = express.Router();
const {createUser, getUsers, deleteUser} = require('../controllers/userController')

router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser)

module.exports = router;

const express = require('express')
const router = express.Router()

var user = require('../route/user.js');
router.use('/user', user);


module.exports = router
const express = require('express');
const router = express.Router();

const masterController = require('../controller/allController');

router.post('/register',masterController.register);
router.post('/login', masterController.adminlogin);
router.post('/userSignup', masterController.userSignup);













module.exports = router;

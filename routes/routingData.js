const express = require('express');
const router = express.Router();

const adminControl = require('../controller/adminController');

router.post('/register',adminControl.register);
router.post('/login', adminControl.adminlogin);












module.exports = router;

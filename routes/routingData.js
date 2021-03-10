const express = require('express');
const router = express.Router();

const masterController = require('../controller/allController');

router.post('/register',masterController.register);
router.post('/login', masterController.adminlogin);
router.post('/userSignup', masterController.userSignup);
router.post('/userLogin', masterController.userLogin);
router.get('/checkProfile', masterController.userProfile);
router.put('/updateProfile', masterController.updateUserProfile);















module.exports = router;

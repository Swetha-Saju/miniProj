
const express = require('express');
const router = express.Router();
const {signUp,logIn,logout,saveScore} = require('../controllers/user.controller');
const {isAuthenticated} = require('../middleware/auth.middleware');

router.post('/register',signUp);
router.post('/login', logIn);
// router.get('/allusers',getAllUsers);
router.post('/score',isAuthenticated,saveScore);
router.get('/logout',isAuthenticated,logout);

module.exports = router;
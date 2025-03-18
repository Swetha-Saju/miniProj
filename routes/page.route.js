const {sendDashboard,sendLogin,sendRegister,sendQuiz} = require('../controllers/page.controller');
const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/auth');
router.get('/',sendLogin);
router.get('/register',sendRegister);
router.get('/dashboard',isAuthenticated,sendDashboard);
router.get('/quiz',isAuthenticated,sendQuiz);

module.exports = router;
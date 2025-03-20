const {sendDashboard,sendLogin,sendRegister,sendQuiz,sendAdmin} = require('../controllers/page.controller');
const express = require('express');
const router = express.Router();
const {isAuthenticated,isAdmin} = require('../middleware/auth.middleware');
router.get('/',sendLogin);
router.get('/register',sendRegister);
router.get('/dashboard',isAuthenticated,sendDashboard);
router.get('/quiz',isAuthenticated,sendQuiz);
router.get('/admin',isAuthenticated,isAdmin,sendAdmin);

module.exports = router;
const sendUserDetails = require('../controllers/admin.controller');
const express = require('express');
const router = express.Router();
const {isAuthenticated,isAdmin} = require('../middleware/auth.middleware');

router.get('/details',isAuthenticated,isAdmin,sendUserDetails);

module.exports = router;
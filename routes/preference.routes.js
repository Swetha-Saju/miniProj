const {getPreference, savePreference} = require('../controllers/preference.controller');
const {isAuthenticated} = require('../middleware/auth.middleware');
const express = require('express');
const router = express.Router();

router.get('/load', isAuthenticated, getPreference);
router.post('/save', isAuthenticated, savePreference);

module.exports = router;


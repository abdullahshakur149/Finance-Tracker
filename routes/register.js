const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.get('/register', registerController.renderRegister);
router.post('/register', registerController.processRegistration);

module.exports = router;

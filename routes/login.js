const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController'); // Import your loginController

router.get('/login', loginController.renderLogin);
router.post('/login', loginController.login); // Use the login method from the controller

module.exports = router;

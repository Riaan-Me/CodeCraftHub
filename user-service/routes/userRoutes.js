const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// User registration route
router.post('/register', userController.register);

// You can add more routes (login, profile update) here

module.exports = router;
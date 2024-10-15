const express = require('express');
const router = express.Router();
const usersController = require('../app/controllers/usersController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/forget-password', usersController.forget_pass);
router.get('/create-password', usersController.create_pass);
router.get('/detail/:id', usersController.detail);
module.exports = router;

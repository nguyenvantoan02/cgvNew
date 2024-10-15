const express = require('express');
const router = express.Router();
const newAdmin = require('../app/controllers/adminsController');

router.get('/', newAdmin.index);

module.exports = router;

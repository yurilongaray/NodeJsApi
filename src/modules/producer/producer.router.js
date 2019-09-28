const express = require('express');
const router = express.Router();
const producerController = require('./producer.controller');

router.get('/winners', producerController.getWinners);

module.exports = router;
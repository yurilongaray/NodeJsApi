const express = require('express');
const router = express.Router();
const movieController = require('./movie.controller');
const mustBeInteger = require('../../middlewares/must-be-integer');
const checkFieldsPost = require('../../middlewares/check-fields');

router.get('/', movieController.getAll);
router.get('/:id', mustBeInteger, movieController.getOne);
router.post('/', checkFieldsPost, movieController.create);
router.put('/:id', mustBeInteger, movieController.update);
router.delete('/:id', mustBeInteger, movieController.delete);

module.exports = router;
const express = require('express');
const router = express.Router();
const movieController = require('./movie.controller');
const middleware = require('../../middlewares/middlewares');

router.get('/', movieController.getAll);
router.get('/:id', middleware.mustBeInteger, movieController.getOne);
router.post('/', middleware.checkFieldsPost, movieController.create);
router.put('/:id', middleware.mustBeInteger, movieController.update);
// router.delete('/:id', movieController.delete);

module.exports = router;
const express = require('express');
const router = express.Router();
const movieController = require('./movie.controller');

router.get('/', movieController.getAll);
router.get('/:id', movieController.getOne);
// router.post('/', movieController.post);
// router.put('/:id', movieController.put);
// router.delete('/:id', movieController.delete);

module.exports = router;
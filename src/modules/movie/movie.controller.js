const movieService = require('./movie.service');
const formatError = require('../../helpers/format-error.helper');

class MovieController {

    getAll(req, res) {

        return movieService.getAll()
            .then(movies => res.json(movies))
            .catch(error => formatError(error, res));
    }

    getOne(req, res) {

        return movieService.getOne(parseInt(req.params.id))
            .then(movie => res.json(movie))
            .catch(error => formatError(error, res));
    }

    create(req, res) {

        return movieService.create(req.body)
            .then(movie => res.status(201).json({
                message: `Movie #${movie.id} has been created`,
                content: movie
            }))
            .catch(error => formatError(error, res));
    }

    update(req, res) {

        return movieService.update(req.params.id, req.body)
            .then(movie => res.json({
                message: `Movie #${req.params.id} has been updated`,
                content: movie
            }))
            .catch(error => formatError(error, res));
    }

    delete(req, res) {

        return movieService.delete(req.params.id)
            .then(() => res.json({
                message: `Movie #${req.params.id} has been deleted`
            }))
            .catch(error => formatError(error, res));
    }
}

module.exports = new MovieController();
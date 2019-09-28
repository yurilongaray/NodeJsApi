const movieService = require('./movie.service');

class MovieController {

    getAll(req, res) {

        return movieService.getAll()
            .then(movies => res.json(movies))
            .catch(error => {

                if (error.status) {
                    res.status(error.status).json({ message: error.message })
                } else {
                    res.status(500).json({ message: error.message })
                }
            });
    };

    getOne(req, res) {

        const id = parseInt(req.params.id);

        return movieService.getOne(id)
            .then(movie => res.json(movie))
            .catch(error => {

                if (error.status) {
                    res.status(error.status).json({ message: error.message })
                } else {
                    res.status(500).json({ message: error.message })
                }
            });
    };

    create(req, res) {

        return movieService.create(req.body)
            .then(movie => res.status(201).json({
                message: `The movie #${movie.id} has been created`,
                content: movie
            }))
            .catch(err => res.status(500).json({ message: err.message }));
    }

    update(req, res) {

        const id = req.params.id;

        return movieService.update(id, req.body)
            .then(movie => res.json({
                message: `The movie #${id} has been updated`,
                content: movie
            }))
            .catch(error => {
                if (error.status) {
                    res.status(error.status).json({ message: error.message })
                }
                res.status(500).json({ message: error.message })
            });
    }

    delete(req, res) {

        const id = req.params.id

        return movieService.delete(id)
            .then(() => res.json({
                message: `The movie #${id} has been deleted`
            }))
            .catch(err => {
                if (err.status) {
                    res.status(err.status).json({ message: err.message })
                }
                res.status(500).json({ message: err.message })
            })
    }
}

module.exports = new MovieController();
let movies = require('../../data/movielist.json');
const movieService = require('./movie.service');

class MovieController {

    async getAll(req, res, next) {

        return movieService.getAll(movies)
            .then(movies => res.json(movies))
            .catch(error => {

                if (error.status) {
                    res.status(error.status).json({ message: error.message })
                } else {
                    res.status(500).json({ message: error.message })
                }
            });
    };

    async getOne(req, res, next) {

        const id = parseInt(req.params.id);

        return movieService.getOne(movies, id)
            .then(movie => res.json(movie))
            .catch(error => {

                if (error.status) {
                    res.status(error.status).json({ message: error.message })
                } else {
                    res.status(500).json({ message: error.message })
                }
            });
    };
}

module.exports = new MovieController();
/* exports.post = (req, res, next) => {
        res.status(201).send('Requisição recebida com sucesso!');
    };

    exports.put = (req, res, next) => {
        let id = req.params.id;
        res.status(201).send(`Requisição recebida com sucesso! ${id}`);
    };

    exports.delete = (req, res, next) => {
        let id = req.params.id;
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    }; */
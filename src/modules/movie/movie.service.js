let movies = require('../../data/movielist.json');
const findOneOrFail = require('../../helpers/find-one-or-fail.helper');
const writeIntoJsonFile = require('../../helpers/write-into-json-file.helper');

class MovieService {

    getAll() {

        return new Promise((resolve, reject) => {

            if (!movies.length) {

                reject({
                    message: 'Movies Not Found',
                    status: 202
                });
            }

            resolve(movies);
        })
    }

    getOne(id) {

        return findOneOrFail(movies, id);
    }

    create(movie) {

        return new Promise((resolve, reject) => {

            const id = movies[movies.length - 1].id + 1;
            const newMovie = { id, ...movie };

            movies.push(newMovie);

            writeIntoJsonFile(movies, reject);

            resolve(newMovie);
        });
    }

    update(id, newMovie) {

        return new Promise(async (resolve, reject) => {

            const movieFound = await findOneOrFail(movies, id);

            const index = movies.findIndex(movie => movie.id == movieFound.id);

            movies[index] = { id: movieFound.id, ...newMovie };

            writeIntoJsonFile(movies, reject);

            resolve(movies[index]);
        });
    }
}

module.exports = new MovieService();
const findOneOrFail = require('../../helpers/find-one-or-fail.helper');
const root = require('app-root-path');
const writeIntoJsonFile = require('../../helpers/write-into-json-file.helper');

let movies = require('../../data/movielist.json');
const filePath = `${root.path}/src/data/movielist.json`;

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
    
        return new Promise(async (resolve, reject) => {
            
            const movieFound = findOneOrFail(movies, id, reject);
            
            resolve(movieFound);
        });
    }

    create(movie) {

        return new Promise((resolve, reject) => {

            const id = movies[movies.length - 1].id + 1;
            const newMovie = { id, ...movie };

            movies.push(newMovie);

            writeIntoJsonFile(filePath, movies, reject);

            resolve(newMovie);
        });
    }

    update(id, newMovie) {

        return new Promise((resolve, reject) => {

            const movieFound = findOneOrFail(movies, id, reject);
            const index = movies.findIndex(movie => movie.id == movieFound.id);

            movies[index] = { id: movieFound.id, ...newMovie };

            writeIntoJsonFile(filePath, movies, reject);

            resolve(movies[index]);
        });
    }

    delete(id) {

        return new Promise((resolve, reject) => {

            const movieFound = findOneOrFail(movies, id, reject);
            const newMovies = movies.filter(movie => movie.id !== movieFound.id);

            writeIntoJsonFile(filePath, newMovies, reject);

            resolve();
        });
    }
}

module.exports = new MovieService();
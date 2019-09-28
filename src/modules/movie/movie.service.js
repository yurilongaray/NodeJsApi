let movies = require('../../data/movielist.json');
const fs = require('fs');
const root = require('app-root-path');

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

        return new Promise((resolve, reject) => {

            const movieFound = movies.find(movie => movie.id === id);

            if (!movieFound) {

                reject({
                    message: 'Movie Not Found',
                    status: 404
                });
            }

            resolve(movieFound);
        });
    }

    create(movie) {

        return new Promise((resolve, reject) => {

            const id = movies[movies.length - 1].id + 1;
            const newMovie = { id, ...movie };

            movies.push(newMovie);
            fs.writeFileSync(`${root.path}/src/data/movielist.json`, JSON.stringify(movies), 'utf8', (error) => {
            
                if (error) {
                    
                    reject(error)
                }
            });

            resolve(newMovie);
        });
    }
}

module.exports = new MovieService();
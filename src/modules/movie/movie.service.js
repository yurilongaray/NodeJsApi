
class MovieService {

    getAll(movies) {

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

    getOne(movies, id) {

        return new Promise((resolve, reject) => {
    
            const movieFound = movies.find(movie => movie.id === id);
            
            if(!movieFound) {
                
                reject({
                    message: 'Movie Not Found',
                    status: 404
                });
            }
            
            resolve(movieFound);
        });
    }
}

module.exports = new MovieService();
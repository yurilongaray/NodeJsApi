const fs = require('fs');
const root = require('app-root-path');
const writeIntoJsonFile = require('./write-into-json-file.helper');
const movies = require('../data/movielist.json');

const producerListPath = `${root.path}/src/data/producers.json`;

module.exports = () => {

    return new Promise((resolve, reject) => {

        try {

            const producerList = [];

            for (const movie of movies) {

                if (movie.producers) {

                    const splitedProducers = movie.producers.replace(' and ', ', ').split(', ');

                    for (const producer of splitedProducers) {

                        const producerFound = producerList.find(p => p.name === producer);

                        if (producerFound) {
                            
                            const index = producerList.findIndex(p => p.name === producer);
                            
                            if(movie.winner === 'yes') {
                            
                                producerList[index].winYears.push(parseInt(movie.year))
                            }

                        } else {

                            producerList.push({
                                name: producer,
                                winYears: movie.winner === 'yes' ? [parseInt(movie.year)] : []
                            });
                        }
                    }
                }
            }
            
            //
            
            const onlyConsecutiveWinners = producerList.filter(producer => producer.winYears.length > 1);
            const 
            
            
            
            //
            
            // writeIntoJsonFile(producerListPath, producerList);

            resolve();
        } catch (error) {

            console.log(error);

            reject(error)
        }
    });
}
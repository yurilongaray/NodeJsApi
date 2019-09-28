const fs = require('fs');
const root = require('app-root-path');
const writeIntoJsonFile = require('./write-into-json-file.helper');
const movies = require('../data/movielist.json');

const producerListPath = `${root.path}/src/data/producerlist.json`;

module.exports = () => {

    return new Promise((resolve, reject) => {

        try {

            const producerList = [];

            for (const movie of movies) {

                const splitedProducers = movie.producers.replace(' and ', ', ').split(', ');

                if (splitedProducers.length) {

                    for (const producer of splitedProducers) {

                        const index = producerList.findIndex(p => p.name === producer);

                        if (index > 0) {

                            if (movie.winner === 'yes') {

                                producerList[index].winYears.push(parseInt(movie.year));
                                producerList[index].winYears = [...new Set(producerList[index].winYears)];
                            }

                            if (producerList[index].winYears.length > 1) {

                                producerList[index].interval = producerList[index].winYears
                                    .reduce((accumulator, currentValue) => currentValue - accumulator);
                                producerList[index].previousWin = producerList[index].winYears[0];
                                producerList[index].followingWin = producerList[index].winYears[1];
                            }
                        } else {

                            producerList.push({
                                name: producer,
                                interval: '',
                                previousWin: '',
                                followingWin: '',
                                winYears: movie.winner === 'yes' ? [parseInt(movie.year)] : []
                            });
                        }
                    }
                }
            }

            writeIntoJsonFile(producerListPath, producerList);

            resolve();
        } catch (error) {

            console.log(error);

            reject(error)
        }
    });
}
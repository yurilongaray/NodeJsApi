const findOneOrFail = require('../../helpers/find-one-or-fail.helper');
const root = require('app-root-path');
const writeIntoJsonFile = require('../../helpers/write-into-json-file.helper');

let producerList = require('../../data/producerlist.json');
const filePath = `${root.path}/src/data/movielist.json`;

class ProducerService {

    getWinners() {

        return new Promise((resolve, reject) => {

            const onlyConsecutiveWinners = producerList.filter(producer => producer.winYears.length > 1);

            const sortConsecutiveWinners = onlyConsecutiveWinners.sort((a, b) => {
            
                return a.interval > b.interval;
            });

            resolve(sortConsecutiveWinners);
        })
    }
}

module.exports = new ProducerService();
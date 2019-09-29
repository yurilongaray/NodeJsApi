const producerService = require('./producer.service');
const formatError = require('../../helpers/format-error.helper');

class ProducerController {

    getWinners(req, res) {

        return producerService.getWinners()
            .then(winners => {

                const fastestWinner = winners[0];
                const slowestWinner = winners[winners.length - 1];

                return res.json({
                    min: [
                        {
                            producer: fastestWinner.name,
                            interval: fastestWinner.interval,
                            previousWin: fastestWinner.previousWin,
                            followingWin: fastestWinner.followingWin
                        }
                    ],
                    max: [
                        {
                            producer: slowestWinner.name,
                            interval: slowestWinner.interval,
                            previousWin: slowestWinner.previousWin,
                            followingWin: slowestWinner.followingWin
                        }
                    ]
                })
            })
            .catch(error => formatError(error, res));
    }
}

module.exports = new ProducerController();
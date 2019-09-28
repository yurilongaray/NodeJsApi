const producerService = require('./producer.service');

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
            .catch(error => {

                if (error.status) {
                    res.status(error.status).json({ message: error.message })
                } else {
                    res.status(500).json({ message: error.message })
                }
            });
    }
}

module.exports = new ProducerController();
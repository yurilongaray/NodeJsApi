function mustBeInteger(req, res, next) {

    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {

        res.status(400).json({ message: 'ID must be an integer' });
    } else {

        next();
    }
}

function checkFieldsPost(req, res, next) {

    const { year, title, studios, producers, winner } = req.body;

    if (year, title, studios, producers, winner) {

        next();
    } else {

        res.status(400).json({ message: 'fields are not good' });
    }
}

module.exports = {
    mustBeInteger,
    checkFieldsPost
}

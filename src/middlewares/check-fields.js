function checkFieldsPost(req, res, next) {

    const { year, title, studios, producers, winner } = req.body;

    if (year, title, studios, producers, winner) {

        next();
    } else {

        res.status(400).json({ message: 'fields are not good' });
    }
}

module.exports = checkFieldsPost;

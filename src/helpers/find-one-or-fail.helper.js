module.exports = (array, id, reject) => {

    const registerFound = array.find(register => register.id == id);

    if (!registerFound) {

        reject({
            message: 'ID not found',
            status: 404
        });
    }

    return registerFound;
}
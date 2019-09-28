module.exports = (array, id) => {

    return new Promise((resolve, reject) => {

        const registerFound = array.find(register => register.id == id);

        if (!registerFound) {

            reject({
                message: 'ID is not good',
                status: 404
            });
        }

        resolve(registerFound);
    })
}
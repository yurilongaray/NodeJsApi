
const fs = require('fs');

module.exports = (fileName, content, reject) => {

    fs.writeFileSync(fileName, JSON.stringify(content), 'utf8', (err) => {
    
        if (err) {
            
            reject();
        }
    });
};

const fs = require('fs');

module.exports = (fileName, content, reject) => {

    fs.writeFileSync(fileName, JSON.stringify(content), 'utf8', (error) => {
    
        if (error) {
            
            return rejece? reject() : error;
        }
    });
};
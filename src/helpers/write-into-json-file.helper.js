
const fs = require('fs');
const root = require('app-root-path');

module.exports = (content, reject) => {

    fs.writeFileSync(`${root.path}/src/data/movielist.json`, JSON.stringify(content), 'utf8', (err) => {
    
        if (err) {
            
            reject();
        }
    });
};
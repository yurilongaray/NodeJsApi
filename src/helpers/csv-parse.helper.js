const fs = require('fs');
const csv = require('csv-parse');
const root = require('app-root-path');

module.exports = () => {

	return new Promise((resolve, reject) => {

		try {

			const result = [];

			fs.createReadStream(`${root.path}/src/data/movielist.csv`)
				.pipe(csv({
					columns: true,
					delimiter: ';',
					skip_lines_with_error: true
				}))
				.on('data', (row) => result.push(row))
				.on('end', () => {
					
					fs.writeFileSync(`${root.path}/src/data/movielist.json`, JSON.stringify(result));
					
					resolve();
				});
		} catch (error) {

			return reject(error);
		}
	});
}
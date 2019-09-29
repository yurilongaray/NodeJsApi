const fs = require('fs');
const csv = require('csv-parse');
const root = require('app-root-path');
const createProducerList = require('./populate-producers');

module.exports = () => {

	return new Promise((resolve, reject) => {

		try {

			const results = [];

			fs.createReadStream(`${root.path}/src/data/movielist.csv`)
				.pipe(csv({
					columns: true,
					delimiter: ';',
					skip_lines_with_error: true
				}))
				.on('data', (row) => results.push(row))
				.on('end', () => {

					const resultsToJson = JSON.stringify(results.map((result, index) => {

						return {
							id: index + 1,
							...result
						};
					}));
					
					fs.writeFile(`${root.path}/src/data/movielist.json`, resultsToJson, () => {
					
						createProducerList();
					});

					resolve(results);
				});
		} catch (error) {

			return reject(error);
		}
	});
}
const fs = require('fs');
const csv = require('csv-parse');
const root = require('app-root-path');
const writeIntoJsonFile = require('./write-into-json-file.helper');
const createProducerList = require('./populate-producers.helper');

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

					const resultsToJson = results.map((result, index) => {

						return {
							id: index + 1,
							...result
						};
					});

					writeIntoJsonFile(`${root.path}/src/data/movielist.json`, resultsToJson);

					createProducerList();

					resolve(results);
				});
		} catch (error) {

			return reject(error);
		}
	});
}
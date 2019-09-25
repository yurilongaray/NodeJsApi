const fs = require('fs');
const csv = require('csv-parse');
const root = require('app-root-path');

module.exports = function () {

	return new Promise((resolve, reject) => {

		try {

			// const csvRows = [];

			fs.createReadStream(`${root.path}/src/data/movielist.csv`)
				.pipe(csv({
					skip_lines_with_error: true,
					separator: ';'
				}))
				.on('data', (row) => {

					// const newRow = {};

					console.log(row);

					// for (const key of Object.keys(row)) {

					// 	newRow[key.replace(/^[ ]+|[ ]+$/g, '')] = row[key]
					// 		? row[key].replace(/^[ ]+|[ ]+$/g, '').replace(/\uFFFD/g, '')
					// 		: '';
					// }

					// csvRows.push(newRow);

				})
				.on('end', () => {

					console.info('CSV file successfully processed');

					resolve(csvRows);
				});
		} catch (error) {

			reject(error);
		}
	});
}
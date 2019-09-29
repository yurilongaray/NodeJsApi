const express = require('express');
const bodyParser = require('body-parser');
const csvParseToJsonFile = require('./src/helpers/csv-parse.helper');

csvParseToJsonFile();

const app = express();

//Rotas
const movie = require('./src/modules/movie/movie.router');
const producer = require('./src/modules/producer/producer.router');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1/movies', movie);
app.use('/api/v1/producers', producer);

module.exports = app;
// https://medium.com/@etiennerouzeaud/how-create-an-api-restfull-in-express-node-js-without-database-b030c687e2ea

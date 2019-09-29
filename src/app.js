const express = require('express');
const bodyParser = require('body-parser');
const normalizaPort = require('./helpers/normalize-port.helper');
const csvParseToJsonFile = require('./helpers/csv-parse.helper');
const createProducerList = require('./helpers/create-producer-json-file');

const app = express();
const port = normalizaPort(process.env.PORT || '3000');

//Rotas
const index = require('./routes/index');
const movie = require('./modules/movie/movie.router');
const producer = require('./modules/producer/producer.router');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1', index);
app.use('/api/v1/movies', movie);
app.use('/api/v1/producers', producer);

app.listen(port, async () => {

    await csvParseToJsonFile();

    await createProducerList();

    console.log(`app listening on port ${port}`)
});

module.exports = app;

// https://medium.com/@etiennerouzeaud/how-create-an-api-restfull-in-express-node-js-without-database-b030c687e2ea
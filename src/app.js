const express = require('express');
const bodyParser = require('body-parser');
const normalizaPort = require('./helpers/normalize-port.helper');
const csvParseToJsonFile = require('./helpers/csv-parse.helper');

const app = express();
const port = normalizaPort(process.env.PORT || '3000');

//Rotas
const index = require('./routes/index');
const movie = require('./modules/movie/movie.router');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1', index);
app.use('/api/v1/movies', movie);

app.listen(port, async () => {

    await csvParseToJsonFile();
    
    console.log(`app listening on port ${port}`)
});
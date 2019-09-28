const express = require('express');
const normalizaPort = require('./helpers/normalize-port.helper');
const csvParseToJsonFile = require('./helpers/csv-parse.helper');

const app = express();
const port = normalizaPort(process.env.PORT || '3000');

//Rotas
const index = require('./routes/index');
const movie = require('./modules/movie/movie.router');

app.use('/', index);
app.use('/movies', movie);

app.listen(port, async () => {

    await csvParseToJsonFile();
    
    console.log(`app listening on port ${port}`)
});
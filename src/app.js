const express = require('express');
const normalizaPort = require('./util/normalize-port');

const app = express();
const router = express.Router();
const port = normalizaPort(process.env.PORT || '3000');

//Rotas
const index = require('./routes/index');
const csv = require('./routes/csv');

app.use('/', index);
app.use('/csv', csv);

app.listen(port, function () {

    console.log(`app listening on port ${port}`)
});
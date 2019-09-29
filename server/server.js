const app = require('../app');
const normalizaPort = require('../src/helpers/normalize-port.helper');
const port = normalizaPort(process.env.PORT || '3000');

app.listen(port, () => {

    console.log(`app listening on port ${port}`)
});
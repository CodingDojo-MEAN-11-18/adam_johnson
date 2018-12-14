const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(parser.json());

app.use(express.static(path.resolve('authors/dist/authors')));

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;

app.use(parser.json());
//DON'T FORGET THIS!!!!!

// app.use('/static', express.static(path.join(__dirname + '/public/dist/public')));

app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Listening on port, ${port}`));


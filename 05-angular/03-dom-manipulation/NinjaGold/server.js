const express = require('express');
const parser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.use(parser.json());

app.use(express.static(__dirname + '/public/dist/public'));


app.listen(port, () => console.log(`Listening on port ${port}`));


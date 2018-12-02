const express = require('express');
const path = require('path');
const parser = require('body-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 8000;

app.use(session({
  secret: 'dfsjalfjlkds',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname + '/static')));

app.use(parser.urlencoded({ extended: true }));

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));



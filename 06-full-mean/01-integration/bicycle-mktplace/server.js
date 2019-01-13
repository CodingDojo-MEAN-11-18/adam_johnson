const express = require('express');
const parser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 8000;

require('./server/config/database');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve('dist/bicycle-mktplace')));

app.use('/api', require('./server/routes'));

app.use(cookieParser('fjdklsajfdlkjdsl'));
app.use(logger('dev'));
app.use(session({
  saveUninitialized: true,
  secret: 'SessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 36000000
  }
}));




app.listen(port, () => console.log(`Listening on port ${port}`));

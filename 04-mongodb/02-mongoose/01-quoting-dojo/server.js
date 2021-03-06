const express = require('express');
const path = require('path');
const parser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const port = process.env.PORT || 8000;
const app = express();

app.use(parser.urlencoded({ extended: true }));

app.use(flash());

app.use(session({
  secret: 'dfkadjflkjsdlk',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


require('./server/config/database');
require('./server/config/routes')(app);
// require('./server/config/routes.js')(app);



app.listen(port, () => console.log(`Listening on port ${port}`));



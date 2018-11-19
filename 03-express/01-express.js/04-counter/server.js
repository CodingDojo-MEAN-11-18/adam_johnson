var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended:true }));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', (request, response) => {
  request.session.count += 1;
  response.render('index', { counter: request.session.count });
});

app.post('/reset', (request, response) => {
  request.session.count = -1;
  response.redirect('/');
});

app.post('/add2', (request, response) => {
  request.session.count += 1;
  response.redirect('/');
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});


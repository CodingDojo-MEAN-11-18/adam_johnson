const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static(__dirname + '/static'));

app.use(bodyParser.urlencoded({ extended:true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 6000 }
}));

app.get('/', (request,response) => {
  response.render('index');
});

app.post('/result', (request,response) => {
  response.render('results', { content: request.body });
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});

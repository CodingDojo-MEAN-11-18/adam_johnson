const express = require('express');
const path = require('path');
const parser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({ extended: true }));


app.get('/', function(request,response){
  response.render('index');
});

app.get('/people', function(request,response){
  axios.get('https://swapi.co/api/people/')
  .then(content => {
    response.json(content.data);
  })
  .catch(error => {
    console.log(error);
    response.json(error);
  });
});

app.get('/planets', function(request,response){
  axios.get('https://swapi.co/api/planets/')
  .then(content => {
    response.json(content.data);
  })
  .catch(error => {
    response.json(error);
  });
});

app.get('/next', function(request,response){
  console.log(request.query);
  let currentpage = 'https://swapi.co/api/people?page='+ request.query.page;
  axios.get(currentpage)
  .then(content => {
    if (content.data.next = null){
      return pass;
    };
    response.json(content.data);
  })
  .catch(error => {
    response.json(error);
  });
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));


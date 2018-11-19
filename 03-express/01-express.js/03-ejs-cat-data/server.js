var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cats', function(request, response){
  response.render('cats');
});

app.get('/jacob', function(request, response){
  var catArray = [
    { image: 'images/cat1.jpeg', name: 'Jacob', color: 'Grey', weight: '12 lbs' }
  ];
  response.render('details', { cat: catArray });
});

app.get('/simba', function(request, response){
  var catArray = [
    { image: 'images/cat2.jpeg', name: 'Simba', color: 'Black', weight: '10 lbs' }
  ];
  response.render('details', { cat: catArray });
});

app.get('/tigger', function(request, response){
  var catArray = [
    { image: 'images/cat3.jpeg', name: 'Tigger', color: 'Orange', weight: '8 lbs' }
  ];
  response.render('details', { cat: catArray });
});


app.listen(8000, function(){
  console.log('listening on port 8000');
});

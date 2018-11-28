const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
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

const { Schema } = mongoose;

const wolfSchema = new Schema({
  name: String,
  age: Number,
  weight: Number
});

const Wolf = mongoose.model('Wolf', wolfSchema);

app.get('/', function(request,response){
  Wolf.find({})
  .then(wolves => {
    response.render('index', { wolves: wolves });
  })
  .catch(error => {
    console.log(error);
    response.redirect('/');
  });
});

app.get('/wolves/new', function(request,response){
  response.render('new');
});

app.post('/wolves', function(request,response){
  const wolf = new Wolf({
    name: request.body.name,
    age: request.body.age,
    weight: request.body.weight
  });
  wolf.save()
  .then(savedWolf => {
    console.log(savedWolf);
    response.redirect('/');
  })
  .catch(error => {
    console.log(error);
  });
});

app.get('/wolves/:id', function(request,response){
  Wolf.find({ _id:request.params.id })
  .then(info => {
    response.render('wolfdetail', { info: info });
  })
  .catch(error => {
    console.log(error);
  });
});

app.get('/wolves/edit/:id', function(request,response){
  Wolf.find({ _id:request.params.id })
  .then(editedWolf => {
    response.render('editwolf', { editedWolf: wolf[0] });
  })
  .catch(error => {
    console.log(error);
  });
});

app.post('/wolves/:id', function(request,response){
  Wolf.findOne({ _id:request.params.id })
  .then(wolf => {
    wolf.name = request.body.name;
    wolf.age = request.body.age;
    wolf.weight = request.body.weight;
    wolf.save()
    .then(updatedWolf => {
      console.log(updatedWolf);
      response.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
  })
  .catch(error => {
    console.log(error);
  });
});

app.get('/wolves/destroy/:id', function(request,response){
  Wolf.remove({ _id:request.params.id })
  .then(wolf => {
    console.log(wolf);
    response.redirect('/');
  })
  .catch(error => {
    console.log(error);
  });
});

mongoose.connect('mongodb://localhost:27017/wolves',{
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Mongo Connected'));

app.listen(port, () => console.log(`Listening on port ${port}`));


const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');

const port = process.env.PORT || 8000;

const app = express();

app.use(parser.json());

const { Schema } = mongoose;

const PersonSchema = new Schema({
  name: String
}, { timestamps: true });

const Person = mongoose.model('Person', PersonSchema);

app.get('/', function(request,response){
  Person.find({})
    .then(people => {
      response.json({ data: people });
    })
    .catch(error => {
      console.log(error);
    });
});
app.get('/new/:name', function(request,response){
  const person = new Person({
    name: request.params.name
  });
  person.save()
    .then(person => {
      console.log(person);
      response.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
  // console.log(request.params.name);
});

app.get('/remove/:name', function(request,response){
  Person.remove({ name: request.params.name })
    .then(() => {
      response.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/:name', function(request,response){
  Person.find({ name: request.params.name })
    .then(person => {
      response.json({ person });
    })
    .catch(error => {
      console.log(error);
    });
});

mongoose.Promise = global.Promise;
//gets rid of DepricationWarning

mongoose.connect('mongodb://localhost:27017/1955', {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Mongo connected'));


app.listen(port, () => console.log(`Listening on port ${port}`));



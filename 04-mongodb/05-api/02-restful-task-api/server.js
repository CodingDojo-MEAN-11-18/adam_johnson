const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

const app = express();

app.use(parser.json());

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

app.get('/', function(request,response){
  Task.find({})
    .then(tasks => {
      response.json({ data: tasks });
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/:id', function(request,response){
  Task.findById(request.params.id)
    .then(task => {
      response.json({ task });
    })
    .catch(error => {
      console.log(error);
    });
});

app.post('/:title/:description/:completed', function(request,response){
  const task = new Task({
    title: request.params.title,
    description: request.params.description,
    completed: request.params.completed
  });
  task.save()
    .then(task => {
      console.log(task);
      response.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

app.put('/:id/:title/:description/:completed', function(request,resposne){
  Task.findById(request.params.id)
    .then(task => {
      task.title = request.params.title;
      task.description = request.params.description;
      task.completed = request.params.description;
    })
    .catch(error => {
      console.log(error);
    });
});

app.delete(':id', function(request,response){
  Task.remove({ id: request.params.id })
    .then(() => {
      response.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});


mongoose.connect('mongodb://localhost:27017',{
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Mongo Connected'));

app.listen(port, () => console.log(`Listening on port ${port}`));



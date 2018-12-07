const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(parser.json());

app.use(express.static(__dirname + '/public/dist/public'));

// app.use('/static', express.static(path.join(__dirname + '/public/dist/public')));

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

app.get('/tasks', function(request,response){
  Task.find({})
    .then(tasks => {
      response.json({ tasks });
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/:_id', function(request,response){
  Task.findById(request.params.id)
    .then(task => {
      response.json({ task });
    })
    .catch(error => {
      console.log(error);
    });
});

app.post('/', function(request,response){
  // const task = new Task({
  //   title: request.params.title,
  //   description: request.params.description,
  //   completed: request.params.completed
  // });
  // task.save()
  Task.create(request.body)
      .then(task => {
        console.log(task);
        response.json({ task });
      })
      .catch(error => {
        console.log(error);
      });
});

app.put('/:_id', function(request,response){
  // Task.findById(request.params.id)
  //   .then(task => {
  //     task.title = request.params.title;
  //     task.description = request.params.description;
  //     task.completed = request.params.description;
  //   })
  Task.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then(task => {
      response.json({ task });
    })
    .catch(error => {
      console.log(error);
    });
});

app.delete('/:_id', function(request,response){
  // Task.remove({ id: request.params.id })
  Task.findByIdAndRemove(request.params.id)
    .then(result => {
      response.json({ result });
    })
    .catch(error => {
      console.log(error);
    });
});


mongoose.connect('mongodb://localhost:27017/tasks',{
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Mongo Connected'));

app.listen(port, () => console.log(`Listening on port ${port}`));





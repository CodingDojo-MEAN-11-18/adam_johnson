const express = require('express');
const parser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');


const app = express();
const port = process.env.PORT || 8000;

app.use(flash());

app.use(session({
  secret: 'jkljlkas',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({ extended: true }));

const { Schema } = mongoose;
const commentSchema = new Schema({
  name: {
    type: String,
    required : [true, 'Please provide your name']
  },
  comment: {
    type: String,
    required: [true, 'Please provide a comment']
  }
});

const Comment = mongoose.model('Comment', commentSchema);

const messageSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name']
  },
  message: {
    type: String,
    required: [true, 'Please provide a message']
  },
  comments: [commentSchema]
});

const Message = mongoose.model('Message', messageSchema);

app.get('/', function(request,response){
  Message.find({})
  .then(words => {
    response.render('index', { words });
  })
  .catch(error => {
    console.log(error);
  });
});

app.post('/message', function(request,response){
  const message = new Message({
    name: request.body.name,
    message: request.body.message
  });
  message.save()
    .then(savedMessage => {
      console.log(savedMessage);
      response.redirect('/');
    })
    .catch(error => {
      Object.keys(error.errors).map(key => request.flash('errors',error.errors[key].message));
      // Object.keys(error.errors).map(key => console.log(error.errors[key].message));
      response.redirect('/');
    });
});

app.post('/comment', function(request,response){
  // const comment = new Comment({
  //   name: request.body.name,
  //   comment: request.body.comment
  // });
  const comment = new Comment(request.body);
  comment.save()
    .then(comment => {
      return Message.findById(request.body.id)
        .then(message => {
          message.comments.push(comment);
          return message.save();
         })
          .then(() => {
            response.redirect('/');
          });
    })
    .catch(error => {
      Object.keys(error.errors).map(key => request.flash('errors',error.errors[key].message));
          response.redirect('/');
    });
});

mongoose.connect('mongodb://localhost:27017/messageBoard',{
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Mongo Connected'));

app.listen(port, () => console.log(`Listening on port ${port}`));

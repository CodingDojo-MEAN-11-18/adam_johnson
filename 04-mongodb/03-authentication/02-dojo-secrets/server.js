const express = require('express');
const path = require('path');
const parser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
const port = process.env.PORT || 8000;

app.use(flash());

app.use(session({
  secret: 'fdjsaklfjdsalk',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({ extended: true }));

const { Schema } = mongoose;

const CommentSchema = new Schema({
  comment: {
    type: String,
    required: [true, 'Please enter a comment']
  }
});

const Comment = mongoose.model('Comment', CommentSchema);

const SecretSchema = new Schema({
  secret: {
    type: String,
    required: [true, 'Please enter a secret']
  },
  comments: [CommentSchema]
});

const Secret = mongoose.model('Secret', SecretSchema);

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name required'],
    minlength: [2, 'Name must contain more than 1 char']
  },
  lastName: {
    type: String,
    required: [true, 'Last name required'],
    minlength: [2, 'Name must contain more than 1 char']
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password required']
  },
  secrets: [SecretSchema]
});

const User = mongoose.model('User', UserSchema);



app.get('/', function(request,response){
  response.render('index');
});

app.post('/register', function(request,response){
  //check if user is already in database = User.find
  //if not already registered...hash password and register
  //login (set user id in session)
  User.find({ email: request.body.email })
    .then((result) => {
      if (result.length === 0){
        console.log('email available');
        bcrypt.hash(request.body.password,10)
        .then(hashedPW => {
          const user = new User({
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            password: hashedPW
          });
          user.save()
          .then(() => {
            request.session.userID = user.id;
            response.redirect('/secrets');
          })
          .catch(error => {
            Object.keys(error.errors).map(key => request.flash('errors',error.errors[key].message));
            response.redirect('/');
          });
        })
        .catch(error => {
          console.log(error);
        });
      } else {
        console.log('email taken');
        response.redirect('/');
      }
    })
    .catch( error => {
      console.log(error);
    });
});

app.post('/login', function(request,response){
  User.findOne({ email:request.body.email })
    .then(result => {
      if (result.length === 0){
        console.log('email not registered');
        response.redirect('/');
      } else {
        userID = result.id;
        bcrypt.compare(request.body.password, result.password)
          .then(result => {
            if (result){
              request.session.userID = userID;
              response.redirect('/secrets');
            } else {
              response.redirect('/');
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/secrets', function(request,response){
  User.findById(request.session.userID)
    .then(result => {
      Secret.find({})
        .then(secrets => {
          response.render('secrets/index', { result, secrets });
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
});

app.post('/secrets', function(request,response){
  const secret = new Secret(request.body);
  secret.save()
  .then(secret => {
    console.log(secret);
    User.findById(request.session.userID)
    .then(user => {
      console.log(user);
      user.secrets.push(secret);
      user.save()
      .then(() => {
        response.redirect('/secrets');
      })
      .catch(error => {
        console.log(error);
      });
    })
    .catch(error => {
      console.log(error);
    });
  })
  .catch(error => {
    console.log(error);
  });
});

app.get('/secrets/:id', function(request,response){
  Secret.findById({ _id: request.params.id })
    .then(secret => {
      response.render('secrets/view', { secret });
    })
    .catch(error => {
      console.log(error);
    });
});

app.post('/comment', function(request,response){
  const comment = new Comment({
    comment: request.body.comment
  });
  comment.save()
  .then(comment => {
    Secret.findById(request.body.id)
    .then(secret => {
      console.log(comment);
      console.log(secret);
      secret.comments.push(comment);
      secret.save()
      .then(() => {
        response.redirect('/secrets');
      })
      .catch(error => {
        console.log(error);
      });
    })
    .catch(error => {
      console.log(error);
    });
  })
  .catch(error => {
    console.log(error);
  });
});

mongoose.connect('mongodb://localhost:27017/dojo_secrets', {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Mongo connected'));

app.listen(port, () => console.log(`Listening on port ${port}`));

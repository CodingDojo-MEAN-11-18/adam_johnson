const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const parser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const bcrypt = require('bcryptjs');

const port = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'kjfdksla',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(flash());

app.use(parser.urlencoded({ extended: true }));


const { Schema } = mongoose;

const UserSchema = new Schema ({
  firstName: {
    type: String,
    required: [true, 'Please enter your name'],
    minlength: [2, 'Name must contain at lease 2 chars']
  },
  lastName: {
    type: String,
    required: [true, 'Please enter name'],
    minlength: [2, 'Name must contain at least 2 chars']
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: [true, 'Email already in use'],
    $regex: [/r'^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$'/, 'Please enter valid email address']
  },
  password: {
    type: String,
    required: [true, 'Please enter password']
  }
});

const User = mongoose.model('User', UserSchema);

app.get('/', function(request,response){
  error = request.session.error;
  response.render('index', { error });
});

app.post('/register', function(request,response){
  bcrypt.hash(request.body.password,10)
  .then(hashedPw => {
    const user = new User ({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: hashedPw
    });
    user.save()
    .then(user => {
      console.log(user);
      request.session.userID = user._id;
      response.redirect('/home');
    })
    .catch(error => {
      Object.keys(error.errors).map(key => request.flash('errors',error.errors[key].message));
      response.redirect('/');
    });
  })
  .catch(error => {
    console.log(error);
    response.redirect('/');
  });
});

app.get('/home', function(request,response){
  User.findById(request.session.userID)
  .then(user => {
    response.render('home', { user });
  })
  .catch(error => {
    console.log(error);
    response.redirect('/');
  });
});

app.post('/login', function(request,response){
  User.findOne({ email:request.body.email })
  .then(user => {
    bcrypt.compare(request.body.password, user.password)
      .then(result => {
        if (result){
          console.log(user.id);
          request.session.userID = user.id;
          response.redirect('home');
        } else {
          console.log('password incorrect');
          request.session.error = 'Password Incorrect';
          response.redirect('/');
        }
      })
      .catch(error => {
        console.log(error);
        response.redirect('/');
      });
  })
  .catch(error => {
    console.log(error);
    console.log('email not found');
    request.session.error = 'Email not found';
    response.redirect('/');
  });
});

mongoose.connect('mongodb://localhost:27017/login_reg', {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Mongo connected'));

app.listen(port, () => console.log(`Listening on port ${port}`));

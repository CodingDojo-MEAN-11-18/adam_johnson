const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const parser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const port = process.env.PORT || 8000;
const app = express();

app.use(parser.urlencoded({ extended: true }));

app.use(flash());

app.use(session({
  secret: 'dfkadjflkjsdlk',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

const { Schema } = mongoose;
//const Schema = mongoose.Schema

const quoteSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name']
  },
  quote: {
    type: String,
    required: [true, 'Please provide a quote']
  }
}, { timestamps: true });

const Quote = mongoose.model('Quote', quoteSchema);
app.get('/', function(request,response){
  response.render('index');
});

app.get('/quotes', function(request,response){
  Quote.find({})
  .then(quotes => {
    response.render('quotes', { quotes: quotes });
  })
  .catch(error => {
    console.log(error);
    repsonse.redirect('index');
  });
});

app.post('/quotes', function(request,response){
  const quote = new Quote({
    name: request.body.name,
    quote: request.body.quote
  });
  quote.save()
   .then(savedQuote => {
     console.log(savedQuote);
     response.redirect('/quotes');
   })
   .catch(error => {
     Object.keys(error.errors).map(key => request.flash('errors',error.errors[key].message));
     response.redirect('/');
   });
});

app.get('/clear', function(request,response){
  Quote.remove({}, function(error){
    if (error){
      console.log(error);
    } else {
      response.redirect('/quotes');
    }
  });
});

mongoose.connect('mongodb://localhost:27017/quotes', {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Mongo Connected'));


app.listen(port, () => console.log(`Listening on port ${port}`));



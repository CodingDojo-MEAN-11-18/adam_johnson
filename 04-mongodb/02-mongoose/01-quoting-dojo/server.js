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


require('./server/config/routes.js')(app);


mongoose.connect('mongodb://localhost:27017/quotes', {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => console.log('Mongo Connected'));


app.listen(port, () => console.log(`Listening on port ${port}`));



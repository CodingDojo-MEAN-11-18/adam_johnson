const mongoose = require('mongoose'),
  Quote = mongoose.model('Quote');
module.exports = function(app){
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
};

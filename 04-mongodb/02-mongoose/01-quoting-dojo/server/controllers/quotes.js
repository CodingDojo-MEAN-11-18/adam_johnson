const Quote = require('mongoose').model('Quote');

module.exports = {
  index(request, response){
    response.render('index');
  },
  show(request,response){
    Quote.find({})
    .then(quotes => {
      response.render('quotes', { quotes: quotes });
    })
    .catch(error => {
      console.log(error);
      repsonse.redirect('index');
    });
  },
  create(request,response){
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
  },
  destroy(request,response){
    Quote.remove({}, function(error){
      if (error){
        console.log(error);
      } else {
        response.redirect('/quotes');
      }
    });
  }

};

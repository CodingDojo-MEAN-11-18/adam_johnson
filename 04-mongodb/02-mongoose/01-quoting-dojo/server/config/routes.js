// const mongoose = require('mongoose'),
//   Quote = mongoose.model('Quote');
// module.exports = function(app){
//   app.get('/', function(request,response){
//   });
//   app.get('/quotes', function(request,response){

//   });
//   app.post('/quotes', function(request,response){

//   });
//   app.get('/clear', function(request,response){

//   });
// };
const quoteController = require('../controllers/quotes');

module.exports = function(app) {
  app.get('/', quoteController.index);
  app.get('/quotes', quoteController.show);
  app.post('/quotes', quoteController.create);
  app.get('/clear', quoteController.destroy);
};

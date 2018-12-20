const authorController = require('../controllers/authors');
const path = require('path');

module.exports = function(app) {
  app.get('/api/authors', authorController.index);
  app.get('/api/authors/:id', authorController.show);
  app.post('/api/authors', authorController.create);
  app.put('/api/authors/:id', authorController.edit);
  app.delete('/api/authors/:id', authorController.delete);
  app.put('/api/authors/:id/quotes/:quoteid',authorController.quoteChange);
  app.delete('/api/authors/:id/quotes/:quoteid', authorController.quoteDelete);
  // app.all('*', function(request,response){
  //   const file = path.resolve('authors/dist/authors/index.html');
  //   response.sendFile(file);
  //   console.log('caught request',request.url);
  // });
  app.all('*', (request,response,next) => {
    response.sendFile(path.resolve('./authors/dist/authors/index.html'));
  });
};

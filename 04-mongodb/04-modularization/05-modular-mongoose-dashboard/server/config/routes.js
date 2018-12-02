const wolfController = require('../controllers/wolves');

module.exports = function(app) {

  app.get('/', wolfController.index);
  app.get('/wolves/new', wolfController.new);
  app.post('/wolves', wolfController.create);
  app.get('/wolves/:id', wolfController.show);
  app.get('/wolves/edit/:id', wolfController.edit);
  app.post('/wolves/:id', wolfController.update);
  app.get('/wolves/destroy/:id', wolfController.destroy);

};



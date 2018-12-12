const cakeController = require('../controllers/cakes');
const reviewController = require('../controllers/reviews');

module.exports = function(app) {
  app.get('/cakes', cakeController.index);
  app.post('/cakes', cakeController.create);
  app.get('/cakes/:id', cakeController.show);

  app.post('/reviews/:id',reviewController.create);
};

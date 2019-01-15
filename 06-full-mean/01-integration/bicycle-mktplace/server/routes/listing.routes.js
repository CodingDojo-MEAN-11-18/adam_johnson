const { listingController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .post('/', listingController.create)
  .get('/', listingController.index)
  .delete('/:id', listingController.delete);

const router = require('express').Router();
// const path = require('path');

const { playerController } = require('../controllers');

module.exports = router
  .get('/', playerController.index)
  .post('/', playerController.create)
  .delete('/:id', playerController.delete)
  .put('/:id', playerController.update);
  // .all('*', (request,response,next) => {
  //   response.sendFile(path.resolve('../../dist/team-manager/index.html'));
  // });

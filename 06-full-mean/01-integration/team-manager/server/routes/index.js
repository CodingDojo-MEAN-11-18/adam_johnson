const router = require('express').Router();
const playerRouter = require('./player.routes');

module.exports = router.use('/players', playerRouter);

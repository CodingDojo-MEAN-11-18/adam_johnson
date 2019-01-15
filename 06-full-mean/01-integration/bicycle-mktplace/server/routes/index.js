const authRoutes = require('./auth.routes');
const listingRoutes = require('./listing.routes');
const router = require('express').Router();

module.exports = router
  .use('/listings', listingRoutes)
  .use('/auth', authRoutes);


const Listing = require('mongoose').model('Listing');
const { Http } = require('@status/codes');

module.exports = {
  index(request,response) {
    Listing.find({})
      .then(listings => {
        response.json(listings);
      })
      .catch(error => {
        console.log(error);
      });
  },
  create(request,response) {
    Listing.create(request.body)
      .then(listing => {
        console.log(listing);
        response.json(listing);
      })
      .catch(error => {
        console.log(error);
      });
  },
  delete(request,response) {
    Listing.findByIdAndRemove(request.params.id)
      .then(listing => {
        console.log(listing);
      })
      .catch(error => {
        console.log(error);
      });
  }

};

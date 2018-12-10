const Location = require('mongoose').model('Location');

module.exports = {
  create (request,response){
    console.log('creating location', request.body);
    Location.create(request.body)
      .then(location => {
        console.log(`Location created: ${location}`);
        response.json({ location });
      })
      .catch(error => {
        console.log(error);
      });
  },
  index (request,response){
    Location.find({})
      .then(locations => {
        response.json({ locations });
      })
      .catch(error => {
        console.log(error);
      });
  }
};

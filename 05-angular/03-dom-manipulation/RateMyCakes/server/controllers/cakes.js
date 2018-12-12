const Cake = require('mongoose').model('Cake');

module.exports = {
  create (request,response){
    console.log('creating cake',request.body);
    Cake.create(request.body)
      .then(cake => {
        console.log(cake);
        response.json({ cake });
      })
      .catch(error => {
        console.log(error);
      });
  },
  index (request,response){
    Cake.find({})
      .then(cakes => {
        response.json({ cakes });
      })
      .catch(error => {
        console.log(error);
      });
  },
  show (request,response){
    Cake.findById(request.params.id)
      .populate('reviews')
      .then(cake => {
        response.json({ cake });
      })
      .catch(error => {
        console.log(error);
      });
  }
};

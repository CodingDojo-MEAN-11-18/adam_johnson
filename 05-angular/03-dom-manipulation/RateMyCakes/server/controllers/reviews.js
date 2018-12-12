const Review = require('mongoose').model('Review');
const Cake = require('mongoose').model('Cake');

module.exports = {
  create(request,response){
    Review.create(request.body)
      .then(review => {
        console.log(`Review Created: ${review}`);
        return Cake.findById(request.params.id)
          .then(cake => {
            cake.reviews.push(review.id);
            return cake.save();
          })
          .then(() => {
            response.json({ createdReview: review });
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
};

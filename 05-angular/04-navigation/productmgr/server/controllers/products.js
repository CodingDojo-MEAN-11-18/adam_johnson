const Product = require('mongoose').model('Product');

module.exports = {
  index (request,response){
    Product.find({})
      .then(products => {
        console.log('Got products', products);
        response.json({ products });
      })
      .catch(error => {
        console.log(error);
      });
  },
  show (request,response){
    Product.findById(request.params.id)
      .then(product => {
        console.log('Found product', product);
        response.json({ product });
      })
      .catch(error => {
        console.log(error);
      });
  },
  create (request,response){
    Product.create(request.body)
      .then(product => {
        console.log(`Created product: ${product}`);
        response.json({ product });
      })
      .catch(error => {
        console.log(error);
      });

  },
  edit (request, response){
    Product.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(product => {
        response.json({ product });
      })
      .catch(error => {
        console.log(error);
      });

  },
  delete (request,response){
    Product.findByIdAndRemove(request.params.id)
      .then(product => {
        response.json({ product });
        console.log(product);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

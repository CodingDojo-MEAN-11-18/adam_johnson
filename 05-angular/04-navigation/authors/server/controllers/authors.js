const Author = require('mongoose').model('Author');

module.exports = {
  index (request,response){
    Author.find({})
      .then(authors => {
        console.log(authors);
        response.json({ authors });
      })
      .catch(error =>{
        console.log(error);
      });
  },
  show (request,response){
    Author.findById(request.params.id)
      .then(author => {
        response.json({ author });
      })
      .catch(error => {
        console.log(error);
      });
  },
  create (request,response){
    Author.create(request.body)
      .then(author => {
        console.log(author);
        response.json(author);
      })
      .catch(error => {
        console.log(error);
      });
  },
  edit (request,response){
    Author.findByIdAndUpdate(request.params.id,request.body,{ new: true })
      .then(author => {
        console.log(author);
        response.json(author);
      })
      .catch(error => {
        console.log(error);
      });
  },
  delete (request,response){
    Author.findByIdAndRemove(request.params.id)
      .then(author => {
        console.log(author);
        response.json(author);
      })
      .catch(error => {
        console.log(error);
      });
  },
  quoteChange (request,response){
    console.log(request.body);
    const { change } = request.body;
    const { quoteid } = request.params;

    Author.findOneAndUpdate({ 'quotes._id': quoteid },{ $inc: { 'quotes.$.votes': change } }, { new: true })
    .then( quote => {
      console.log(request.params);
      console.log(quote);
      response.json(quote);
    })
    .catch(error => {
      console.log(error);
    });
  },
  quoteDelete (request,response){
    const { quoteid } = request.params;
    console.log(quoteid);
    Author.findOneAndUpdate({ 'quotes._id': quoteid }, { $pull: { 'quotes.$': { quoteid } } } )
      .then( data => {
        response.json(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

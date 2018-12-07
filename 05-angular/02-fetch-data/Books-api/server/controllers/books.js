const Book = require('mongoose').model('Book');
const Author = require('mongoose').model('Author');

module.exports = {
  new (request,response){
    Author.find({})
      .then(authors => {
        response.json({ Authors: authors });
      })
      .catch(error => {
        console.log(error);
      });
  },
  create (request,response){
    console.log('creating book', request.body);
    Book.create(request.body)
      .then(book => {
        console.log(`Book Created: ${book}`);

        return Author.findById(book.author)
          .then(author => {
            author.books.push(book.id);
            return author.save();
          })
          .then(() => {
            response.json({ createdBook: book });
          });
      })
      .catch(error => {
        console.log(error);
      });
  },
  destroy (request,response){
    Book.findByIdAndRemove(request.params.id)
      .then(result => {
        response.json({ deletedBook: result });
      })
      .catch(error => {
        console.log(error);
      });
  }
};

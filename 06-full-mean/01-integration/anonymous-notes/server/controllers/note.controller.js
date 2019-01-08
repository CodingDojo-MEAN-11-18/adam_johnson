const Note = require('mongoose').model('Note');
// const { Http } = require('@status/codes');

module.exports = {
  index(request,response) {
    Note.find({})
      .then(notes => response.json(notes))
      .catch(error => {
        // response.status(Http.InternalServerError).json(error);
        console.log(error);
      });
  },
  show(request,response) {},
  create(request,response) {
    Note.create(request.body)
      .then(note => response.json(note))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        // response.status(Http.UnprocessableEntity.json(errors));
        response.json({ error: errors });
        console.log(errors);
      });
  },
  update(request,response) {},
  delete(request,response) {
    Note.findByIdAndRemove(request.params.id)
      .then(note => response.json(note))
      .catch(error => {
        console.log(error);
      });
  },

};

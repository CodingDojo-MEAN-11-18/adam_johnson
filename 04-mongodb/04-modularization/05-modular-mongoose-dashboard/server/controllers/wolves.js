const Wolf = require('mongoose').model('Wolf');

module.exports = {
  index(request,response){
    Wolf.find({})
    .then(wolves => {
      response.render('index', { wolves: wolves });
    })
    .catch(error => {
      console.log(error);
      response.redirect('/');
    });
  },
  new (request,response){
    response.render('new');
  },
  create (request,response){
    const wolf = new Wolf({
      name: request.body.name,
      age: request.body.age,
      weight: request.body.weight
    });
    wolf.save()
    .then(savedWolf => {
      console.log(savedWolf);
      response.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
  },
  show (request,response){
    Wolf.find({ _id:request.params.id })
    .then(info => {
      response.render('wolfdetail', { info: info });
    })
    .catch(error => {
      console.log(error);
    });
  },
  edit (request,response){
    Wolf.find({ _id:request.params.id })
      .then(editedWolf => {
        response.render('editwolf', { editedWolf: wolf[0] });
      })
      .catch(error => {
        console.log(error);
      });
   },
   update(request,response){
    Wolf.findOne({ _id:request.params.id })
      .then(wolf => {
        wolf.name = request.body.name;
        wolf.age = request.body.age;
        wolf.weight = request.body.weight;
        wolf.save()
          .then(updatedWolf => {
            console.log(updatedWolf);
            response.redirect('/');
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
   },
   destroy (request,response){
    Wolf.remove({ _id:request.params.id })
      .then(wolf => {
        console.log(wolf);
        response.redirect('/');
      })
      .catch(error => {
        console.log(error);
      });
   }
};

const Player = require('mongoose').model('Player');

module.exports = {
  index (request,response) {
    Player.find({})
      .then(players => response.json(players))
      .catch(error => {
        console.log(error);
      });

  },
  show (request,response) {

  },
  create (request,response) {
    Player.create(request.body)
      .then(player => response.json(player))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response.json({ error: errors });
        console.log(errors);
      });
  },
  update (request,response) {
    console.log(request.body.status);
    Player.findByIdAndUpdate(request.params.id)
      .then(player => {
        player.status = request.body.status;
        player.save();
        response.json(player);
      })
      .catch(error =>  {
        console.log(error);
      });
  },
  delete (request,response) {
    Player.findByIdAndRemove(request.params.id)
      .then(player => response.json(player))
      .catch(error => console.log(error));

  }
};

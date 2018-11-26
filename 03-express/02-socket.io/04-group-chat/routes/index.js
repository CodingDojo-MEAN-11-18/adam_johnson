const users = [];
const messages = [];

function isUser(user) {
  const usersCount = users.length;

  for (let i = 0; i < usersCount; i++){
    if (user === users[i]){
      return true;
    };
  };
  return false;
};
module.exports = function Route(app, server){

  const io = require('socket.io').listen(server);

  io.on('connection', socket => {
    socket.on('load_page', function(data){
      const existingUser = isUser(data.user);
      const event = existingUser ? 'all_users' : 'load_messages';
      const content = existingUser ? {
        error: 'This user already exists'
      } : { currentUser: data.user, messages: messages };

      if (!existingUser){
        users.push(data.user);
      }
      socket.emit(event, content);
    });

    socket.on('new_message', function(data) {
      messages.push({ name: data.user, message: data.message });
      io.emit('post_message', { newMessage: data.message, user: data.user });
    });
  });
  app.get('/', function(request,response){
    response.render('index');
  });
};

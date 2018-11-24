const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;


app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({ extended: true }));

app.get('/', function(request,response){
  response.render('index');
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require('socket.io')(server);

io.on('connection', socket => {
  socket.on('postingForm', function(data){
    let randomNum = Math.floor((Math.random()*1000) + 1);
    let message = `You emitted the following information to the server: Name: ${data.name}, Dojo Location: ${data.locatoin}, Favorite Language: ${data.location}, Commment: ${data.comment}.`;
    socket.emit('updated_message',{ response: message });
    socket.emit('random_number', { response: randomNum });
  });
});

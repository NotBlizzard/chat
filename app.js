var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
})

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  })
  socket.on('disconnect', function() {
    console.log('a user disconnected');
  })
})


http.listen(4000, function(req, res) {
  console.log('listening on port 4000')
});
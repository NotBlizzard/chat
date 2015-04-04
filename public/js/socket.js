var socket = io();

$(document).ready(function() {
  $('#send').click(function() {
    socket.emit('chat message', $('#message').val());
    $('#message').val('');
  })
})

socket.on('chat message', function(msg) {
  $('#messages').append($('<p>').text(msg))
});
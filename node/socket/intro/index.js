const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/app.html');
});

io.on('connection', (socket) => {
  var connection_msg = `A user connected. Socket ID: ${socket.id}`;
  console.log(connection_msg);
  io.emit('message', connection_msg);
  socket.on('disconnect', () => {
    var disconnect_msg = `A user disconnected. Socket ID ${socket.id}`;
    console.log(connection_msg);
    io.emit('message', disconnect_msg);
  });
  socket.on('message', (msg) => {
    var message = `${socket.id}:: ${msg}`;
    console.log(message);
    socket.broadcast.emit('message', message);
  });
});

http.listen(3000, () => {
  console.log("listening on port 3000");
});

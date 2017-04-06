const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var names = {};

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/app.html');
});

io.on('connection', (socket) => {
  socket.on('name', (name) => {
    names[`${socket.id}`] = name;
    console.log(name);
    io.emit('message', `>> ${name} << connected`);
  });
  socket.on('disconnect', () => {
    io.emit('message', `>> ${names[socket.id]} << disconnected`);
  });
  socket.on('message', (msg) => {
    var message = `>> ${names[socket.id]} << ${msg}`;
    socket.broadcast.emit('message', message);
  });
});

http.listen(3000, () => {
  console.log("listening on port 3000");
});

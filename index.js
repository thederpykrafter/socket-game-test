const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 5173;

// Serve html
app.use(express.static(__dirname+"/client"))

// Sockets
var SOCKET_LIST = {};
var PLAYER_LIST = {};

var Player = (id) => {
  var self = {
    x: 0,
    y: 0,
    id: id,
    number: "" + Math.floor(10 * Math.random()),
  }
  return self;
}

io.on('connection', (socket) => {
  socket.id = Math.random();
  SOCKET_LIST[socket.id] = socket;

  var player = Player(socket.id);
  PLAYER_LIST[socket.id] = player;
  
  console.log('a user connected');

  // Disconnect 
  socket.on('disconnect', () => {
    delete SOCKET_LIST[socket.id];
    delete PLAYER_LIST[socket.id];
    console.log('a user disconnected')
  });
});

// Start server
server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});

// Game loop
setInterval(()=>{
  var pack = []
  
  for (var i in PLAYER_LIST) {
    var player = PLAYER_LIST[i];
    player.x++;
    player.y++;
    pack.push({
      x: player.x,
      y: player.y,
      number: player.number
    })
  };
  for (var i in SOCKET_LIST) {
    var socket = SOCKET_LIST[i];
    socket.emit('update', pack);
  };
  
}, 1000 / 60); // 60 fps
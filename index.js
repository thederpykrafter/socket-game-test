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
    x: 200,
    y: 200,
    id: id,
    number: "" + Math.floor(10 * Math.random()),
    pressingUp: false,
    pressingDown: false,
    pressingLeft: false,
    pressingRight: false,
    maxSpd: 3,
  }
  self.updatePosition = () => {
    if (self.pressingUp)
      self.y -= self.maxSpd;
    if (self.pressingDown)
      self.y += self.maxSpd;
    if (self.pressingLeft)
      self.x -= self.maxSpd;
    if (self.pressingRight)
      self.x += self.maxSpd;
  };
  
  return self;
};

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

  // input 
  socket.on('keypress', (data) => {
    if (data.inputId === 'up')
      player.pressingUp = data.state;
    else if (data.inputId === 'down')
      player.pressingDown = data.state;
    else if (data.inputId === 'left')
      player.pressingLeft = data.state;
    else if (data.inputId === 'right')
      player.pressingRight = data.state;
    
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
    player.updatePosition(); 
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
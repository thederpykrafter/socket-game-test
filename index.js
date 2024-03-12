const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 5173;

// Serve html
app.use(express.static(__dirname+"/client"))

// sockets
io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })
});

// Start server
server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});

// Game loop
setInterval(()=>{
  io.sockets.emit('update', user)
}, 1000 / 60); // 60 fps
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 5173;

let user = 0


setInterval(()=>{
  io.sockets.emit('update', user)
}, 1000 / 60); // 60 fps

app.use(express.static(__dirname+"/client"))

io.on('connection', (socket) => {
  user += 1
  console.log('a user connected');
  socket.on('disconnect', () => {
    user -= 1
    console.log('a user disconnected')
  })
});

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
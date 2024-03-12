const socket = io();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

socket.on("update", (data) =>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  draw(data);
})



function draw(data){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw backgroumd
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw players
  for (let i = 0; i < data.length; i++) {
    let playerSize = 60;
    let playerRad = playerSize / 2;
    
    ctx.fillStyle = "yellow";
    ctx.fillRect(data[i].x - playerRad, data[i].y - playerRad, playerSize, playerSize);

    ctx.fillStyle="green"
    ctx.fillRect(data[i].x, data[i].y, 1, 1);;

    ctx.fillStyle = "black"
    ctx.fillText(data[i].number, data[i].x, data[i].y);
  }
}

function fullscreen() {
  document.documentElement.requestFullscreen().catch(e => {
    console.log(e);
  
  })
}
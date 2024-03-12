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
  
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < data.length; i++) {
    ctx.fillStyle = "black";
    ctx.fillText(data[i].number, data[i].x, data[i].y);
  }
}
function fullscreen() {
  document.documentElement.requestFullscreen().catch(e => {
    console.log(e);
  
  })
}
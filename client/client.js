const socket = io();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

socket.on("update", (data)=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
})

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

}


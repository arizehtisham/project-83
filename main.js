var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var lastX,lastY;
var screenwidth=screen.width;
var canvaswidth=screen.width-100;
var canvasheight=screen.height-100;
if(screenwidth<992)
{
    document.getElementById("myCanvas").width=canvaswidth;
    document.getElementById("myCanvas").height=canvasheight;
}

canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    var x=e.touches[0].clientX-canvas.offsetLeft;
  var y=e.touches[0].clientY-canvas.offsetTop;
   
}
canvas.addEventListener("touchmove",move);
function move(e){
  var x=e.touches[0].clientX-canvas.offsetLeft;
  var y=e.touches[0].clientY-canvas.offsetTop;
 
      ctx.beginPath();
      ctx.strokeStyle="black";
      ctx.lineWidth=3;
      ctx.moveTo(lastX,lastY);
      ctx.lineTo(x,y);
      ctx.stroke();
 
  lastX=x;
  lastY=y;
  function touchstart(e){
  color1=document.getElementById("color").value;
  width1=document.getElementById("width").value;
  touchEvent="touchstart";
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

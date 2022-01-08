var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var widthOfLine = 1;
canvas.addEventListener("mousedown" , myMouseDown);
function myMouseDown(e) {
color = document.getElementById("Color").value;
widthOfLine = document.getElementById("widthOfLine").value;
mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseUp" , myMouseUp); 
function myMouseUp(e) {
mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseLeave" , myMouseLeave);
function myMouseLeave(e) {
mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseMove" , myMouseMove);
function myMouseMove(e) {
currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
currentPositionOfMouseY = e.clientY - canvas.offsetTop;
if(mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = widthOfLine;
console.log("Last X and Y positions are");
console.log("x = " + lastPositonOfX + "Y = " + lastPositionOfY);
ctx.moveTo(lastPositionOfX, lastPositionOfY);
console.log("Current position of X and Y are");
console.log("x = " + currentPositionOfMouseX + "Y = " + currentPositionOfMouseY);
ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
ctx.stroke();
}
lastPositionOfX = currentPositionOfMouseX;
lastPositionOfY = currentPositionOfMouseY;
}

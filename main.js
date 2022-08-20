var canvas =  document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

var color = "black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(200,400,70,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_Y = e.clientY - canvas.offsetTop;
    console.log("x= " + mouse_x + ", y= "+mouse_Y);
    circle(mouse_x,mouse_Y);
    
}
function circle(mouse_x,mouse_Y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mouse_x,mouse_Y,70,0,2*Math.PI);
    ctx.stroke();
     
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
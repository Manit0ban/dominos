// Canvas Setup

var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 400;


// BACKGROUND
ctx.fillStyle = "navy";
ctx.fillRect(0, 0, 1000, 400)

// DOMINOS

ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(145, 100, 125, 200, 20);
ctx.fill();

// DETAILS

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(170, 180, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(245, 125, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.roundRect(158, 205, 100, 15, 20);
ctx.fill();



// DOMINO 2

ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(300, 100, 125, 200, 20);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.roundRect(315, 205, 100, 15, 20);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(365, 160, 15, 0, 2 * Math.PI);
ctx.fill();









// DOMINO 3

ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(455, 100, 125, 200, 20);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.roundRect(470, 205, 100, 15, 20);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(480, 180, 15, 0, 2 * Math.PI);
ctx.fill();



// DOMINO 4


ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(610, 100, 125, 200, 20);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.roundRect(625, 205, 100, 15, 20);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(635, 180, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(480, 125, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(555, 125, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(555, 180, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(670, 155, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(710, 130, 15, 0, 2 * Math.PI);
ctx.fill();

// DOMINO 5

ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(765, 100, 125, 200, 20);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.roundRect(780, 205, 100, 15, 20);
ctx.fill();

// TEXT
ctx.font = "15px Arial";
ctx.fillStyle = "white";
ctx.fillText("Art by Rayan Ali", 850, 385);

// IMAGE
var earthImg = document.getElementById("earth");
ctx.drawImage(earthImg, -10, 300, 90, 130);




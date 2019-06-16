var circle = {
  x: 250,
  y: 250,
  diameter: 150
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

var spot = {
  x: 100,
  y: 50
};

var circle2 = {
  x: 250,
  y: 250,
  diameter: 145
};

var r = 0;
var b = 255;

function setup() {
  createCanvas(600, 400);
  
  // background
  background(0);
}

function draw() {
  
  // // background
  // background(250, 250, 100);
  
  // ellipse
  // noStroke();
  // fill(255, 255, 255);
  // ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  // fill(55, 55, 55);
  // noStroke();
  // ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
  // circle2.x = circle2.x + 0.1;
  
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  background(r, 0, b);
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
  
  // spot.x = random(0, width);
  // spot.y = random(0, height);
  // col.r = random(100, 255);
  // col.g = 0
  // col.b = random(100, 190);
  // fill(col.r, col.g, col.b, 100);
  // noStroke();
  // ellipse(spot.x, spot.y, 24, 24);
  
  
}

function mousePressed() {
  
  // background
  background(250, 250, 100);
  
}
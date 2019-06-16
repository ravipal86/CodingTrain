var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  
  // if (mouseX > 300) {
  //   fill(190, 34, 22);
  //   rect(250, 150, 100, 100);
  // }
  // else {
  //   fill(255, 40, 0);
  //   ellipse(300, 200, 100, 100);
  // }
  
  ellipse(x, 200, 100, 100);
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  x = x + speed;
}
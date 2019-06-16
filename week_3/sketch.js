var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  if (on) {
    background(0, 255, 0);
  } else {
    background(0);
  }
  
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
    fill(255, 0, 200);
  }
  
  rectMode(CENTER);
  rect(300, 200, 100, 100);
  
}

function mousePressed() {
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
    if (on) {
      on = false;
    } else {
      on = true;
    }
  }
}

  // if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
  //   if (mousePressed) {
  //     background(0, 255, 0);
  //   }
  //   fill(255, 0, 200);
  // }
  // rectMode(CENTER);
  // rect(300, 200, 100, 100);
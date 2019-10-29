function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();


  // strokeWeight(8);
  // stroke(255);
  // noFill();
  // ellipse(200, 200, 300, 300);

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 59, -90, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  strokeWeight(8);
  stroke(100, 100, 150);
  let minuteAngle = map(mn, 0, 59, -90, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  strokeWeight(8);
  stroke(100, 200, 150);
  let hourAngle = map(hr % 12, 0, 11, -90, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(100, 100, 150);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(100, 200, 150);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

  // fill(225);
  // noStroke();
  // text(hr + ':' + mn + ':' + sc, 10, 200);
}
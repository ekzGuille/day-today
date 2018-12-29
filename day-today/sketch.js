let date = new DateCounter();
let size = 200;
let offset = size + size / 2;
let recOffset = 50;
let barWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  textSize(size);
  text(`${date.getPercent()}%`, (windowWidth / 2) - offset, (windowHeight / 2));
  barWidth = map(date.getPercent(), 0, 100, recOffset, windowWidth - (2 * recOffset));
  fill(0,255,0);
  stroke(255);
  strokeWeight(3);
  rect(recOffset, (windowHeight / 2) + recOffset, barWidth, 50);
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(recOffset + barWidth, (windowHeight / 2) + recOffset, windowWidth - (2 * recOffset) - barWidth, 50);
}
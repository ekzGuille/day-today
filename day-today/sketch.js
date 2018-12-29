let date = new DateCounter();
let size = 200;
let offset = size + size/2

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  textSize(size);
  text(`${date.getPercent()}%`, (windowWidth / 2) - offset, (windowHeight / 2));
}
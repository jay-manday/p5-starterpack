const locs = [];

// -------------
// Setup
// -------------
function setup() {
  createCanvas(windowWidth, windowHeight);

  let res = 20;
  let countX = ceil(width/res) + 1;
  let countY = ceil(height/res) + 1;

  for (let j = 0; j < countY; j++) {
    for (let i = 0; i < countX; i++) {
      locs.push( new p5.Vector(res*i, res*j) );
    }
  };

  noFill();
  stroke(249,78,128);
}

// -------------
// Draw
// -------------
function draw() {
  background(30,67,137);
  for (let i = locs.length - 1; i >= 0; i--) {
    calcVec( locs[i].x - mouseX, locs[i].y - mouseY);
    push();
      translate(locs[i].x, locs[i].y);
      rotate(h.heading());
      line(0, 0, 0, - 15);
    pop();
  };
}

function calcVec(x, y) {
  return new p5.Vector(y - x, - x - y);
}

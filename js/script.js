let x = 0;
let dx = 5;
let y = 100;
let dy = 7;
let score = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#581BCB");
  fill("#00FC62");
  ellipse(x, y, 40, 40);
  rect(mouseX, height - 30, 120, 25);

  if (x > width) {
    dx = -dx;
  }

  if (x < 0) {
    dx = -dx;
  }

  if (y < 0) {
    dy = -dy;
  }

  if (x > mouseX && x < mouseX + 120) {
    if (y > height - 30) {
      dy = -dy;
      score = score + 1;
    }
  }

  textSize(100);
  text(score, 400, 100);

  // Условие проигрыша
  if (y > height + 50) {
    dy = 0;
    dx = 0;
    x = 2000;
    y = 5000;
    fill(255);
    textSize(100);
    text("УПСИИ", 80, 300);
  }

  y = y + dy;
  x = x + dx;
}

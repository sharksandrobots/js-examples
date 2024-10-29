var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(600, 600);
  centerCanvas();
  background(255, 0, 200);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(220);
  
  // Draw circle at mouse position
  circle(mouseX, mouseY, 50);
  
  // Change color based on position
  fill(mouseX/2, mouseY/2, 150);
}

  let x = 0;

  function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(220);
  
    // Draw a moving circle
    circle(x, 200, 50);
    x = x + 1;
  
    // Reset position when off screen
    if (x > width) {
    x = 0;
    }
  }

  function setup() {
    createCanvas(400, 400);
    background(220);
   
    // Create random circles
    for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 50);
      
    fill(random(255), random(255), random(255));
    circle(x, y, size);
    }
  }

  function setup() {
    createCanvas(400, 400);
    background(220);
   
    // Draw a circle
    fill(255, 0, 0);
    circle(200, 200, 100);
   
    // Draw a rectangle
    fill(0, 0, 255);
    rect(50, 50, 80, 80);
   
    // Draw a line
    stroke(0);
    line(0, 0, 400, 400);
  }

  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  
  
  

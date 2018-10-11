var play1 = false;
var play2 = false;
var play3 = false;
var play4 = false;

function preload() {
  arch = loadImage("assets/arch.jpg");
  elm = loadImage("assets/elm.png");
  fire = loadImage("assets/fire.png");
  work = loadImage("assets/work.png");
  na = loadImage("assets/na.png");
  walking = loadSound("assets/walking.mp3");
}

function setup() {
  var myCanvas = createCanvas(800, 600);
  myCanvas.parent("#proj");
  background(255,0,0);
  noStroke();
  image(arch, 0, 0);
  walking.loop();
  walking.play();

}

function draw() {

  frameRate(100);
  ellipse(mouseX, mouseY, 20, 20);

  if (mouseX > 530 && mouseX < 660 && mouseY > 260 && mouseY < 550) {
    frameRate(5);
    image(elm, 520, 250, 150, 300);
  }

  if (mouseX > 270 && mouseX < 530 && mouseY > 380 && mouseY < 580) {
    frameRate(15);
    image(fire, 250, 450, 300, 150);
  }

  if (mouseX > 300 && mouseX < 550 && mouseY > 50 && mouseY < 150) {
    frameRate(15);
    image(na, 270, 50, 300, 150);
  }

  if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 400) {
    frameRate(5);
    image(work, 100, 200, 300, 350);
  }
}

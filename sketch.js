var bg,bg2,form,system,code,security;
var score=0;
var aladdin , a1;
var g, g1;
var carpet,c1;
function preload() {
  bg = loadImage("aladdin_cave2.jpg");
  bg2 = loadImage("treasure.jpg");
  a1 = loadImage("alla.png");
  g1 = loadImage("genie.png");
  c1 = loadImage("carpet.png")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

  carpet = createSprite(240,300,50,40);
  carpet.addImage(c1);
  g = createSprite(160,210,40,40)
  g.addImage(g1);
  g.scale=0.5
  aladin = createSprite(200,405,50,40)
  aladin.scale = 0.5
  aladin.addImage(a1);
  aladin.visible = false;
  g.visible = false;
  carpet.visible = false;
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2)
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
     aladin.visible = true; 
     g.visible = true;
     carpet.visible = true;
  }

  drawSprites()
}
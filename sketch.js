
function preload(){
    var ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
    var sea =  loadAnimation("sea.png");
}

function setup(){
    createCanvas(800,800);
    var ship = createSprite(200,500);
    ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
    ship.scale=0.5;

    var sea = createSprite(400,400);
    sea.addAnimation("sea.png");
 }

function draw() {
  background("blue");
 drawSprites();
}
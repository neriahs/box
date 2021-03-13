var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces
    block1 = createSprite(50, 590)
    block1.shapeColor = "pink"
    block2 = createSprite(200, 590)
    block2.shapeColor = "blue"
    block3 = createSprite(400, 590)
    block3.shapeColor = "yellow"
    block4 = createSprite(600, 590)
    block4.shapeColor = "green"
    box = createSprite(random(20, 750, 1, 1))
    box.shapeColor = "red"
    //create box sprite and give velocity

    box.velocityX = 5
    box.velocityY = 5
}

function touch() {
if (box.isTouching(block1)) {
    box.shapeColor = "pink"
    box.bounceOff(block1)
}
if (box.isTouching(block2)) {
    box.shapeColor = "blue"
    box.bounceOff(block2)
}
if (box.isTouching(block3)) {
    box.shapeColor = "yellow"
    box.bounceOff(block3)
}
if (box.isTouching(block4)) {
    box.shapeColor = "green"
    box.bounceOff(block4)
}
}

function draw() {
    background(rgb(0));
    //create edgeSprite
    edges = createEdgeSprites()
    box.bounceOff(edges)
    touch()
    drawSprites()

    //add condition to check if box touching surface and make it box
}

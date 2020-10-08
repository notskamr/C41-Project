const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var thunder, thunder1;
var rand;



var drops = [];
var maxDrops = 100;
var thunderFrame = 0;

function preload() {
    thunder1 = loadImage("images/thunder.png");
    thunderSound = loadSound("audio/thunder.mp3");

}

function setup() {
    createCanvas(600, 800);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(300, 600);


    if (frameCount % 150 === 0) {

        for (var i = 0; i < maxDrops; i++) {
            drops.push(new Drops(random(0, 600), random(0, 600)));

        }

    }
}

function draw() {
    background("black");
    Engine.update(engine);

    rand = Math.round(random(1, 1));
    if (frameCount % 80 === 0) {
        thunderFrame = frameCount;
        thunder = createSprite(random(10, 570, 10, 10));
        thunder.addImage(thunder1);
        thunderSound.play();
        thunder.scale = random(0.3, 0.6)
    }

    if (thunderFrame + 10 === frameCount && thunder) {
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for (var i = 0; i < maxDrops; i++) {
        drops[i].Drop();
        drops[i].updateY()

    }

    drawSprites();

}
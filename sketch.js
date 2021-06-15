
var plane, planeImg;
var asteroid, asteroidImg;
var bg;
var missile, missileImg;


function preload()
{
  //loading all images
    planeImg = loadImage("img/plane.png");
    asteroidImg = loadImage("img/asteroid.png");
    bg = loadImage("img/bg.jpg");
    missileImg = loadImage("img/missile.png");
}


function setup() 
{
  createCanvas(800, 600);

  //creating plane
    plane = createSprite(400, 530, 50, 50);
    plane.addImage(planeImg);
    plane.scale = 0.3;

}

function draw() 
{
  background(bg);  

  //making plane move according to arrow keys
  if (keyDown(RIGHT_ARROW))
  {
    plane.x = plane.x + 10;
  }

  if (keyDown(LEFT_ARROW))
  {
    plane.x = plane.x - 10;
  }

  //calling asteroid spawning function
  spawnAsteroids();

  drawSprites();
}

//function to create asteroids every 60 frames
function spawnAsteroids()
{
    if(frameCount % 60 === 0)
    {          
      asteroid = createSprite(random(50, 550), 10, 30, 30);
      asteroid.addImage(asteroidImg);
      asteroid.scale = 0.15;
      asteroid.velocityY = 4 + frameCount/240;
      asteroid.lifetime = 200;
    }
}

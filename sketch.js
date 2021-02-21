var ball,paddle;
var ballImage, paddleImage;


function preload() {
  /* preload your images here of the ball and the paddle */
  
  ballImage = loadImage("ball.png");
  
  paddleImage = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  ball = createSprite(50,180,40,40);
  ball.addImage("ball",ballImage);
  ball.scale = 0.8;
  
  paddle = createSprite(300,180,20,80);
  paddle.addImage("paddle",paddleImage);
  paddle.scale = 0.8;
  
  /* give the ball an initial velocity of 5 in the X direction */
  
  ball.velocityX = 5;
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,randomVelocity);

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y-4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y+4;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  ball.velocityY = random(4,7);
  
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}


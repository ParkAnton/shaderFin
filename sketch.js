let theShader;
let shaderTexture;
let door

let theta=0;

let x;
let y;
let oursideRadius=200;
let insideRadius =100;

function preload(){
  theShader=loadShader('texture.vert','texture.frag');
  door = loadImage('door.png');
}

function setup() {
  createCanvas(700,700,WEBGL);
  noStroke();
  shaderTexture=createGraphics(700,700,WEBGL);
  shaderTexture.noStroke();
  x=-50;
  y=0;
}

function draw() {
  // ambientLight(150);
  // let locX = mouseX - width / 2;
  // let locY = mouseY - height / 2;
  // pointLight(255, 255, 255, locX, locY, 700);
  // pointLight(255, 255, 255, locX*-1, locY*-1, 1500);
  
  shaderTexture.shader(theShader);
  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis()/1000.0);
  theShader.setUniform("u_mouse", [mouseX,map(mouseY,0,height, height,0)]);
  shaderTexture.rect(0,0,width,height);
  background(255);
  texture(shaderTexture);
  
   noStroke();
  background(220);
  push();
  translate(-100, 0, 200);
  rotateY((90 * PI) / 180);
  plane(500, 200);
  pop();
  
   push()
  translate(-90,30,400);
  rotateY((90*PI)/180);
  texture(door);
  plane(70,110);
  pop();


  // Right wall
  push();
  translate(100, 0, 200);
  rotateY((90 * PI) / 180);
  plane(500, 200);
  pop();
  
  push()
  translate(90,30,400);
  rotateY((90*PI)/180);
  texture(door);
  plane(70,110);
  pop();

  // Bottom wall
  push();
  translate(0, 100, 200);
  rotateX((90 * PI) / 180);
  plane(200, 500);
  pop();

  // Top wall
  push();
  translate(0, -100, 200);
  rotateX((90 * PI) / 180);
  plane(200, 500);
  pop();
   
  push();
  
  translate(0,0,300);
  plane(200, 200); // Back wall
  pop();
  
  
  push();
  translate(0,0,300);
  rotateZ(theta*0.0001);
  rotateX(theta*mouseX*0.001);
  rotateY(theta*mouseY*0.001);
  theta += 0.05;
  sphere(100);
  pop();
  
}